import type { CardProps } from "../../typage/types";
import { FaGasPump } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Card({ cardProps }: { cardProps: CardProps }) {
  const isAvailable = Boolean(cardProps.status);

  return (
    
    <Link to={`/vente/${cardProps.id}`} className={`${"shadow-md rounded-lg pb-5"} ${cardProps.className ?? ""}`}>
       <div className="relative">
        <div className={`absolute top-2 left-2 ${isAvailable ? "bg-green-500 text-white px-2 py-1 rounded-md text-sm" : "bg-red-500 text-white px-2 py-1 rounded-md text-sm"}`} role="status" aria-label={isAvailable ? "Disponible" : "Indisponible"}>
          {isAvailable ? "Disponible" : "Indisponible"}
        </div>
         <img src={cardProps.imageUrl} alt={cardProps.modele ?? "Voiture"}  className="rounded-t-lg"/>
         <p className="absolute right-4 top-45 bg-white text-2xl rounded-full w-13 text-center items-center justify-center font-bold flex h-13 shadow-md">
            {cardProps.marque}
         </p> 
       </div>

      <div>
        <h2 className="font-bold text-xl mt-4 ml-4 ">{cardProps.modele}</h2>
        <div className="flex items-center justify-between pr-4">
          <p className="text-gray-500 ml-4 mt-2">Année: {cardProps.annee}</p>
          <p className="text-orange-600 font-bold ml-4 mt-2 text-lg">Prix: {cardProps.prix} FCFA</p>
        </div>
        <div className="flex items-center justify-between pr-4">
          <p className="ml-4 mt-2 flex  items-center gap-2"> <FaGasPump /> : {cardProps.Carburant}</p>
          <p className="ml-4 mt-2 flex items-center gap-2"> <GiGearStickPattern /> : {cardProps.boiteVitesse}</p>
        </div>
      </div>
       
    </Link>
    
  )
}


