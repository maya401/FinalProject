import { carDonnees, carLocations } from "../datas/carDatas";
import { marques } from "../datas/marqueDatas";
import { carburants, typesLocation } from "../datas/CarburantDatas";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import Select from "react-select";
import Card from "../components/composRutilisable/Card";
import Footer from "../views/footer";

export default function LocationPage() {
   const [searchCar, setSearchCar] = useState("");
  const handleSearch = (selectedOption: any) => {
    setSearchCar(selectedOption ? selectedOption.value : "");
  }
  return (
    <div>
      <div className=" ">
            <div className="relative  bg-gray-200 w-full p-3 mt-10 container rounded-md ">
                <IoSearch  className="absolute left-4 size-4 translate-y-1/2 text-gray-500"/>
                <input
                  type="text"
                  className="text-gray-500 ml-8 text-lg w-full focus:outline-none "
                  placeholder="rechercher votre voiture"
                  onChange={(e) => setSearchCar(e.target.value.toLowerCase())}
                />
            </div>
      
            <div className=" flex container justify-between mt-5 gap-10 w-full">
              <div className="  bg-gray-200 w-1/3 p-3  rounded-md ">
                <Select    options={marques} placeholder="Sélectionnez la marque"  
                onChange={handleSearch}
                />
              </div>
      
              <div className="  bg-gray-200 w-1/3 p-3  rounded-md  ">
                <Select  options={carDonnees} placeholder="Sélectionnez le modele"
                onChange={handleSearch}
                />
              </div>
      
              <div className=" bg-gray-200 w-1/3 p-3   rounded-md ">
                <Select 
                  options={carburants}
                  placeholder="Sélectionnez le carburant"
                  onChange={handleSearch}
                />
              </div>
               <div className=" bg-gray-200 w-1/3 p-3   rounded-md ">
                <Select 
                  options={typesLocation}
                  placeholder="Sélectionnez le type de location"
                  onChange={handleSearch}
                />
              </div>
            </div>
      
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl  container my-10 ">
              {carLocations.filter(car => car.value.includes(searchCar)).map((car, index) => (
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
            </div>
          </div>
          <Footer />  
    </div>
  )
}
