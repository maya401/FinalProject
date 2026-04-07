import { FaGasPump, FaCalendarAlt } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md"; 
import type { VenteType } from "../../api/vente_location";

export default function Card(cardProps: VenteType) {
  const isAvailable = Boolean(cardProps.statut);

  return (
    <div
      className={`group block bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ${cardProps.className ?? ""}`}
    >
      
      <div className="relative h-56 overflow-hidden">
        <img
          src={cardProps.imageUrl}
          alt={cardProps.modele ?? "Voiture"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

       
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold shadow-sm ${
              isAvailable
                ? "bg-emerald-500 text-white"
                : "bg-rose-500 text-white"
            }`}
          >
            {isAvailable ? "Disponible" : "Indisponible"}
          </span>
        </div>

       
        <div className="absolute bottom-4 right-4 backdrop-blur-md bg-orange-500 border border-white/30 px-3 py-1 rounded-xl">
          <p className="text-white text-xs font-bold uppercase tracking-widest">
            {cardProps.marque}
          </p>
        </div>
      </div>

     
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-slate-800 truncate group-hover:text-orange-600 transition-colors">
            {cardProps.modele}
          </h2>
          <span className="text-sm font-medium text-slate-400">
            {cardProps.annee}
          </span>
        </div>

        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-2xl font-black text-slate-900">
            {cardProps.prix.toLocaleString()}
          </span>
          <span className="text-xs font-bold text-amber-600 uppercase">
            FCFA
          </span>
        </div>

        <hr className="border-slate-50 mb-4" />

        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-slate-50 group-hover:bg-orange-50 transition-colors">
            <div className="p-1.5 bg-white rounded-lg shadow-sm text-orange-500">
              <FaGasPump size={14} />
            </div>
            <span className="text-xs font-semibold text-slate-600 capitalize">
              {cardProps.carburant}
            </span>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-slate-50 group-hover:bg-orange-50 transition-colors">
            <div className="p-1.5 bg-white rounded-lg shadow-sm text-orange-500">
              <GiGearStickPattern size={14} />
            </div>
            <span className="text-xs font-semibold text-slate-600 capitalize">
              {cardProps.boiteVitesse}
            </span>
          </div>
        </div>

        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
          {cardProps.typedeLocation ? (
            <div className="flex items-center gap-2 text-slate-500">
              <FaCalendarAlt className="text-orange-400" size={12} />
              <span className="text-[11px] font-medium uppercase tracking-tight">
                {cardProps.typedeLocation}{" "}
                {cardProps.count && `(${cardProps.count})`}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-slate-400">
              <MdLocationOn size={14} />
              <span className="text-[11px] font-medium uppercase tracking-tight text-slate-500">
                Dakar, SN
              </span>
            </div>
          )}

          <span className="text-orange-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Détails →
          </span>
        </div>
      </div>
    </div>
  );
}
