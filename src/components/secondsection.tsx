// import { SiHyundai, SiJeep, SiRenault } from "react-icons/si";
import { useEffect, useState } from "react";
import { getVente, type VenteType } from "../api/vente_location";
import Card from "./composRutilisable/Card";
import Carte from "./composRutilisable/carte";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function SecondSection() {
  const [ventes, setVentes] = useState<VenteType[]>([]);
    const [isloading, setIsLoading] = useState(false);
   
    const fetchVentes = async () => {
      try {
        setIsLoading(true);
        const response = await getVente();
        setVentes(response);
      }catch (error){
        console.log(error);
        setIsLoading(false);
  
      }finally{
        setIsLoading(false);
      }
    }
    useEffect(() => {
      fetchVentes();
    }, []);
  
  if (isloading) {
    return <div className="flex items-center justify-center h-screen">
      <p className="text-gray-500 text-lg">Chargement des ventes...</p>
    </div>
  }
  return (
    <div className="container">
      <div className="flex justify-between items-center w-full mb-10">
        <div className="flex flex-col">
          <Carte title="Nouvelles voitures" className={"text-black text-4xl"} />
          <p className="text-lg">Decouvrez notre large gamme de voitures</p>
        </div>
        <a
          href="/vente"
          className="flex items-center gap-2 font-medium hover:underline cursor-pointer"
        >
          Voir toutes nos voitures
          <FaChevronRight className="w-8 h-8" />
        </a>
      </div>
     
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl ">
        {ventes.slice(0, 6).map((car, index) => (
          <Link to={`/vente/${car._id}`}>
            <Card
              key={index}
              _id={car._id}
              marque={car.marque}
              modele={car.modele}
              annee={car.annee}
              prix={car.prix}
              carburant={car.carburant}
              boiteVitesse={car.boiteVitesse}
              statut={car.statut}
              imageUrl={car.imageUrl}
              description={car.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
