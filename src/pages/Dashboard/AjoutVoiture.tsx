import { Outlet } from "react-router-dom";


export default function AjoutVoiture() {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-3 mb-6">
          Ajouter un véhicule à la flotte
        </h2>
        <form className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Marque</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Modèle</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Carburant</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300">
                        <option>Essence</option>
                        <option>Diesel</option>
                        <option>Électrique</option>
                        <option>Hybride</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Boite de Vitesse</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300">
                        <option>Manuelle</option>
                        <option>Automatique</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prix (CFA)</label>
                    <input type="number" className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300"/>
                </div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold transition-all shadow-md shadow-orange-100 mt-6">
                Ajouter le véhicule
            </button>
        </form>
      </div>
      <Outlet />
    </div>
  )
}
