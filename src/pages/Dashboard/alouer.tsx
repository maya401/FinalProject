import { PencilLine, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { getLocation, type VenteType } from "../../api/vente_location";
import api from "../../api/api";

export default function Alouer() {
  const [cars, setCars] = useState<VenteType[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getLocation();
        setCars(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erreur lors du chargement des locations");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

   const Modifier = (id: string) => {
    navigate(`/dashboard/modifier-location/${id}`);
  };
  
  const Supprimer = async (id: string) => {
    const confirmerSuprression = window.confirm("Êtes-vous sûr de vouloir supprimer ce véhicule ?");
    if (confirmerSuprression)  return;
    try{
      await api.delete(`/locations/${id}`);
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
    <div className="bg-white rounded-2xl shadow-sm  border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Flotte de véhicules</h2>
        <Link
          to="/dashboard/louer-voiture"
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold transition-all shadow-md shadow-orange-100"
        >
          + Nouveau véhicule
        </Link>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="px-6 py-4">Véhicule</th>
              <th className="px-6 py-4">Boite Vitesse</th>
              <th className="px-6 py-4">Carburant</th>
              <th className="px-6 py-4">Prix / Jour</th>
              <th className="px-6 py-4">Statut</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {cars.map((car) => (
              <tr
                key={car._id}
                className="hover:bg-orange-50/30 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">
                      {car.marque}
                    </span>
                    <span className="text-sm text-gray-500">{car.modele}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {car.boiteVitesse}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      car.carburant === "Essence"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-purple-50 text-purple-600"
                    }`}
                  >
                    {car.carburant}
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-orange-600">
                  {car.prix.toLocaleString()} FCFA
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      car.statut
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {car.statut ? "Disponible" : "Indisponible"}
                  </span>
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
