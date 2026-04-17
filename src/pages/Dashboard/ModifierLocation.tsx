import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api/api";
import { getLocationById, type VenteType } from "../../api/vente_location";

export default function ModifierLocation() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<VenteType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;
        const data = await getLocationById(id);
        setForm(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    if (!form) return;

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "prix" || name === "annee" || name === "count"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.put(`/locations/${id}`, form); 
      toast.success("Voiture modifiée avec succès 🚗");
      navigate("/dashboard/location");
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la modification");
    }
  };

  if (loading || !form) {
    return <p className="text-center">Chargement...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">Modifier la location</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="marque"
          value={form.marque}
          onChange={handleChange}
          placeholder="Marque"
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          name="modele"
          value={form.modele}
          onChange={handleChange}
          placeholder="Modèle"
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="number"
          name="annee"
          value={form.annee}
          onChange={handleChange}
          placeholder="Année"
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          name="carburant"
          value={form.carburant}
          onChange={handleChange}
          placeholder="Carburant"
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          name="boiteVitesse"
          value={form.boiteVitesse}
          onChange={handleChange}
          placeholder="Boîte de vitesse"
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="number"
          name="prix"
          value={form.prix}
          onChange={handleChange}
          placeholder="Prix"
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="URL de l'image"
          className="w-full p-3 border rounded-lg"
        />

        
        <select
          name="typedeLocation"
          value={form.typedeLocation}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Type de location</option>
          <option value="journée">Journée</option>
          <option value="semaine">Semaine</option>
          <option value="mois">Mois</option>
        </select>

       
        <input
          type="number"
          name="count"
          value={form.count || 0}
          onChange={handleChange}
          placeholder="Nombre disponible"
          className="w-full p-3 border rounded-lg"
        />

       
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.statut}
            onChange={(e) =>
              setForm({ ...form, statut: e.target.checked })
            }
          />
          <label>Disponible</label>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
        >
          Modifier
        </button>
      </form>
    </div>
  );
}