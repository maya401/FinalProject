
import { FaChevronRight } from "react-icons/fa6";
import Carte from "../components/composRutilisable/carte";
import Card from "../components/composRutilisable/Card";
import { carLocations } from "../datas/carDatas";


export default function TrosiemeSection() {
  return (
    <div className="container">
      
    
      <div className="flex  justify-between items-center w-full mb-10 mt-24">
        <div className="flex flex-col">
        <Carte title="Voitures à louer" className={"text-black text-4xl"} />
        <p className="text-lg">Decouvrez nos voitures à louer</p>
        </div>

       <button className="flex items-center mt-10 hover:underline cursor-pointer">
        <span className="">Voir toutes nos voitures </span>
        <FaChevronRight  className="w-8 h-8"/>
       </button>
      
     
      </div>
    
    
        {/* les types de voitures */}
        <a href="/vente" className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl ">
         {carLocations.map((car, index) => (
          <Card
            key={index}
            cardProps={{
              imageUrl: car.imageUrl,
               marque: <car.marque />,
              modele: car.modele,
              annee: car.annee,
              prix: car.prix,
              boiteVitesse: car.boiteVitesse,
              Carburant: car.Carburant,
              status: car.status,
            }}
          />
        ))}
        </a>

        
      
  </div>
  )
}