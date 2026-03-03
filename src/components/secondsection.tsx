// import { SiHyundai, SiJeep, SiRenault } from "react-icons/si";
import Card from "./composRutilisable/Card";
import Carte from "./composRutilisable/carte";
import { FaChevronRight } from "react-icons/fa6";
import { carDonnees } from "../datas/carDatas";


export default function SecondSection() {
  return (
    <div className="container">
      <div className="flex justify-between items-center w-full mb-10">
        <div className="flex flex-col">
        <Carte title="Nouvelles voitures" className={"text-black text-4xl"} />
        <p className="text-lg">Decouvrez notre large gamme de voitures</p>
        </div>
        <a href="/vente" className="flex items-center gap-2 font-medium hover:underline cursor-pointer">
          Voir toutes nos voitures
          <FaChevronRight  className="w-8 h-8"/>
        </a>

       
      
     
      </div>
    
    
        {/* les types de voitures */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl ">
        {carDonnees.map((car, index) => (
          <Card
            key={index} 
            cardProps={{
              id: car.id,
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
      </div>
  </div>
  )
}
