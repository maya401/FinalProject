// import { FaChevronRight } from "react-icons/fa6";
import Carte from "../components/composRutilisable/carte";
import Card from "../components/composRutilisable/Card";
import { getLocation, type VenteType } from "../api/vente_location";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TrosiemeSection() {
  const [location, setlocation] = useState<VenteType[]>([]);
  const [isloading, setIsLoading] = useState(false);

  const fetchLocations = async () => {
    try {
      setIsLoading(true);
      const response = await getLocation();
      setlocation(response);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchLocations();
  }, []);

  if (isloading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Chargement des voitures...</p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="flex  justify-between items-center w-full mb-10 mt-24">
        <div className="flex flex-col">
          <Carte title="Voitures à louer" className={"text-black text-4xl"} />
          <p className="text-lg">Decouvrez nos voitures à louer</p>
        </div>

        {/* <a href="/louer" className="flex items-center mt-10 hover:underline cursor-pointer">
          <span className="">Voir toutes nos voitures </span>
          <FaChevronRight className="w-8 h-8" />
        </a> */}
      </div>

      
      <a
        href="/vente"
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl "
      >
        {location.slice(0, 6).map((car, index) => (
          <Link to={`/location/${car._id}`}>
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
              typedeLocation={car.typedeLocation}
              count={car.count}
            />
          </Link>
        ))}
      </a>
    </div>
  );
}
