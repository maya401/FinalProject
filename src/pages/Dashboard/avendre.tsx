import { PencilLine, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getVente, type VenteType } from "../../api/vente_location";
import api from "../../api/api";


export default function CarDashboard() {
  const [cars, setCars] = useState<VenteType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVentes = async () => {
      try {
        const data = await getVente();
        setCars(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erreur lors du chargement des ventes");
        }
      }finally {
        setLoading(false);
      }
    };

    fetchVentes();
  }, []);

  const Modifier = (id: string) => {
    navigate(`/dashboard/modifier-vente/${id}`);
  };
  
  const Supprimer = async (id: string) => {
    const confirmerSuprression = window.confirm("Êtes-vous sûr de vouloir supprimer ce véhicule ?");
    if (confirmerSuprression)  return;
    try{
      await api.delete(`/ventes/${id}`);
      setCars((prevCars) => prevCars.filter((car) => car._id !== id));
    }  catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Erreur lors de la suppression du véhicule");
        }
      }finally {
        setLoading(false);
      }
  };

  if (loading) {
    return <p className="text-center">Chargement...</p>;
  }
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
          Gestion de la Flotte
        </h2>
        <Link
          to="/dashboard/ajout-voiture"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          + Ajouter un véhicule
        </Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-4 px-6 font-semibold">Véhicule</th>
              <th className="py-4 px-6 font-semibold">Carburant</th>
              <th className="py-4 px-6 font-semibold">Boite de Vitesse</th>
              <th className="py-4 px-6 font-semibold">Prix</th>
              <th className="py-4 px-6 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {cars.map((car) => (
              <tr
                key={car._id}
                className="border-b border-gray-100 hover:bg-orange-50 transition duration-150"
              >
                <td className="py-4 px-6">
                  <span className="font-bold text-gray-900">{car.marque}</span>{" "}
                  {car.modele}
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${car.carburant === "Essence" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}
                  >
                    {car.carburant}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-500">{car.boiteVitesse}</td>
                <td className="py-4 px-6 font-medium text-orange-600">
                  {car.prix} CFA
                </td>
                <td className="py-4 px-6 text-center flex justify-center gap-4">
                  <PencilLine 
                  className="cursor-pointer text-blue-500 hover:text-blue-700"
                  onClick={() => Modifier(car._id)}
                  />
                  <Trash 
                  className="cursor-pointer text-red-500 hover:text-red-700"
                  onClick={() => Supprimer(car._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
