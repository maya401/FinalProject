import { ChartNoAxesCombined } from "lucide-react";

export default function Dashbord() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bienvenue sur votre tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Ventes du mois</h2>
          <p className="text-3xl font-bold text-orange-500 flex justify-between items-center">10
          <ChartNoAxesCombined />
          </p>
          <p className="text-gray-600">Revenu total : <span className="font-bold text-orange-500">89 500 000  CFA</span></p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Véhicules en location</h2>
          <p className="text-3xl font-bold text-orange-500 flex justify-between items-center">30
          <ChartNoAxesCombined />
          </p>
          <p className="text-gray-600">Revenu total : <span className="font-bold text-orange-500">45 000 000 CFA</span></p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Véhicules disponibles</h2>
          <p className="text-3xl font-bold text-orange-500 flex justify-between items-center">15
          <ChartNoAxesCombined />
          </p>
          <p className="text-gray-600">Total de la flotte : <span className="font-bold text-orange-500">50 véhicules</span></p>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Activités récentes</h2>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <ChartNoAxesCombined className="text-orange-500" />
              </div>
              <div>
                <p className="text-gray-700 font-medium">Nouvelle vente</p>
                <p className="text-sm text-gray-500"> Il y'a 2 heures </p>
              </div>
            </li>
            
            <li className="flex items-center gap-3">

              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <ChartNoAxesCombined className="text-orange-500" />
              </div>
              <div>
                <p className="text-gray-700 font-medium">Nouveau client</p>
                <p className="text-sm text-gray-500"> Il y'a 5 heures </p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <ChartNoAxesCombined className="text-orange-500" />
              </div>
              <div>
                <p className="text-gray-700 font-medium">Véhicule ajouté à la flotte</p>
                <p className="text-sm text-gray-500"> Il y'a 1 jour</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
