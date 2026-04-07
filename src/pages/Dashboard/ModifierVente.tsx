import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/api";
import { getVenteById,type VenteType } from "../../api/vente_location";
    

export default function ModifierVente() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<VenteType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;
        const data = await getVenteById(id);
        setForm(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!form) return;

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "prix" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.put(`/ventes/${id}`, form);
      alert("Véhicule modifié avec succès");
      navigate("/dashboard/avendre");
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la modification");
    }
  };

  if (loading || !form) {
    return <p className="text-center">Chargement...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">Modifier le véhicule</h2>

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
          placeholder="Boite de vitesse"
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
