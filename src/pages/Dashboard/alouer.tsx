

const data = [
  { id: 1, marque: "Peugeot", modele: "208", carburant: "Essence", boiteVitesse: "Manuelle", prix: 25000, statut: "Disponible" },
  { id: 2, marque: "Renault", modele: "Clio", carburant: "Diesel", boiteVitesse: "Automatique", prix: 30000, statut: "Loué" },
  { id: 3, marque: "Citroën", modele: "C3", carburant: "Essence", boiteVitesse: "Manuelle", prix: 22000, statut: "Disponible" },
  { id: 4, marque: "Volkswagen", modele: "Golf", carburant: "Diesel", boiteVitesse: "Automatique", prix: 45000, statut: "Maintenance" },
];

export default function Alouer() {

  return (
    <div className="bg-white rounded-2xl shadow-sm  border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Flotte de véhicules</h2>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold transition-all shadow-md shadow-orange-100">
          + Nouveau véhicule
        </button>
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
            {data.map((car) => (
              <tr key={car.id} className="hover:bg-orange-50/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">{car.marque}</span>
                    <span className="text-sm text-gray-500">{car.modele}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {car.boiteVitesse}
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    car.carburant === 'Essence' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                  }`}>
                    {car.carburant}
                  </span>
                </td>
                <td className="px-6 py-4 font-bold text-orange-600">
                  {car.prix.toLocaleString()} FCFA
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    car.statut === 'Disponible' ? 'bg-green-100 text-green-700' : 
                    car.statut === 'Loué' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {car.statut}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-orange-500 hover:text-orange-700 font-semibold mr-3">Modifier</button>
                  <button className="text-red-400 hover:text-red-600">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


