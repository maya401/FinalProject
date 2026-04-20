import axios from "axios";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

type InputProps = {
  label: string;
  value: string | number;
  type?: string;
  onChange: (value: string) => void;
};

function Input({ label, value, onChange, type = "text" }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-100 focus:bg-white focus:outline-none"
      />
    </div>
  );
}

export default function AjoutVoiture() {
  const navigate = useNavigate();
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [carburant, setCarburant] = useState("");
  const [boiteVitesse, setBoiteVitesse] = useState("");
  const [prix, setPrix] = useState<number | "">("");
  const [description, setDescription] = useState("");
  const [annee, setAnnee] = useState<number | "">("");
  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !marque ||
      !modele ||
      !carburant ||
      !boiteVitesse ||
      !prix ||
      !imageUrl ||
      !description ||
      !annee
    ) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("marque", marque);
      formData.append("modele", modele);
      formData.append("carburant", carburant);
      formData.append("boiteVitesse", boiteVitesse);
      formData.append("description", description);
      formData.append("annee", annee.toString());
      formData.append("statut", "true");
      formData.append("prix", prix.toString());
      formData.append("image", imageUrl);

      await axios.post("https://backendfp-3.onrender.com/api/ventes", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/dashboard/avendre");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError("Erreur lors de l'ajout : " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Ajouter un véhicule 🚗
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl shadow-lg"
      >
        <div className="space-y-4">
          <Input label="Marque" value={marque} onChange={setMarque} />
          <Input label="Modèle" value={modele} onChange={setModele} />
          <Input label="Carburant" value={carburant} onChange={setCarburant} />
          <Input
            label="Boite de vitesse"
            value={boiteVitesse}
            onChange={setBoiteVitesse}
          />
          <Input
            label="Prix"
            type="number"
            value={prix}
            onChange={(v: string) => setPrix(Number(v))}
          />
          <Input
            label="Année"
            type="number"
            value={annee}
            onChange={(v: string) => setAnnee(Number(v))}
          />

          <textarea
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 focus:bg-white focus:outline-none"
          />
        </div>

        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-orange-400 transition">
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files) setImageUrl(e.target.files[0]);
            }}
          />

          {imageUrl && (
            <img
              src={URL.createObjectURL(imageUrl)}
              className="mt-4 rounded-lg max-h-60 object-cover"
            />
          )}
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold transition transform hover:scale-[1.01]"
          >
            {loading ? "Ajout en cours..." : "Ajouter le véhicule"}
          </button>
        </div>
      </form>

      <Outlet />
    </div>
  );
}
