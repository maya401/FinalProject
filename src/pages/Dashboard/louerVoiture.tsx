import { Outlet } from "react-router-dom";


export default function LouerVoiture() {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-3 mb-6">
          Ajouter un véhicule à la flotte
        </h2>
        <form className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-x-7 flex justify-between">
            <div className="space-y-6 w-2/3 ">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Marque</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent   text-sm">
                        <option>Peugeot</option>
                        <option>Renault</option>
                        <option>Citroën</option>
                        <option>Volkswagen</option>

                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Modèle</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparenttext-sm ">
                        <option>208</option>
                        <option>Clio</option>
                        <option>C3</option>
                        <option>Golf</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Carburant</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent  text-sm ">
                        <option>Essence</option>
                        <option>Diesel</option>
                        <option>Électrique</option>
                        <option>Hybride</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Boite de Vitesse</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent  text-sm ">
                        <option>Manuelle</option>
                        <option>Automatique</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prix par jour (CFA)</label>
                    <input type="number" className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent  text-sm "/>
                </div>
            </div>
            <div className="w-1/3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Photo du véhicule</label>
                <img src="/images/placeholder.png" alt="Photo du véhicule" className="w-full  object-cover" />
            </div>
        </form>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold transition-all shadow-md shadow-orange-100 mt-6">
                Ajouter le véhicule
            </button>
      </div>
      <Outlet />
    </div>
  )
}
