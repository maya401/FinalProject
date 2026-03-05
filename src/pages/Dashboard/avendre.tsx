import { PencilLine, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const data = [
  { id: 1, marque: "Peugeot", modele: "208", carburant: "Essence", boiteVitesse: "Manuelle", prix: "24567888" },
  { id: 2, marque: "Renault", modele: "Clio", carburant: "Diesel", boiteVitesse: "Automatique", prix: "345768889" },
  { id: 3, marque: "Citroën", modele: "C3", carburant: "Essence", boiteVitesse: "Manuelle", prix: "5688765443" },
  { id: 4, marque: "Volkswagen", modele: "Golf", carburant: "Diesel", boiteVitesse: "Automatique", prix: "997653211" },
];



export default function CarDashboard() {

  return (
    <div >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
          Gestion de la Flotte
        </h2>
        <Link to="/dashboard/ajout-voiture" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition duration-200">
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
            {data.map((car) => (
              <tr key={car.id} className="border-b border-gray-100 hover:bg-orange-50 transition duration-150">
                <td className="py-4 px-6">
                  <span className="font-bold text-gray-900">{car.marque}</span> {car.modele}
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs ${car.carburant === 'Essence' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {car.carburant}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-500">{car.boiteVitesse}</td>
                <td className="py-4 px-6 font-medium text-orange-600">{car.prix} CFA</td>
                <td className="py-4 px-6 text-center flex justify-center gap-4">
                 <PencilLine />
                  <Trash />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
  );
};


