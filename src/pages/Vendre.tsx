import Card from "../components/composRutilisable/Card";
import Select from "react-select";
import { marques } from "../datas/marqueDatas";
import { carburants } from "../datas/CarburantDatas";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import Footer from "../views/footer";
import { Outlet } from "react-router-dom";
import { getVente, type VenteType } from "../api/vente_location";

export default function VendrePage() {
  const [searchCar, setSearchCar] = useState("");
  const [selectedMarque, setSelectedMarque] = useState("");
  const [selectedCarburant, setSelectedCarburant] = useState("");
  const [ventes, setVentes] = useState<VenteType[]>([]);
  const [isloading, setIsLoading] = useState(false);

  const fetchVentes = async () => {
    try {
      setIsLoading(true);
      const response = await getVente();
      setVentes(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVentes();
  }, []);

  if (isloading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Chargement des ventes...</p>
      </div>
    );
  }

  const filteredCars = ventes.filter((car) => {
    return (
      (searchCar === "" ||
        car.marque.toLowerCase().includes(searchCar) ||
        car.modele.toLowerCase().includes(searchCar)) &&
      (selectedMarque === "" ||
        car.marque.toLowerCase() === selectedMarque.toLowerCase()) &&
      (selectedCarburant === "" ||
        car.carburant.toLowerCase() === selectedCarburant.toLowerCase())
    );
  });

  return (
    <div>
      <div className="px-4 md:px-10 mb-10">
        <div className="relative bg-white shadow-sm border border-gray-100 w-full p-4 mt-10 rounded-2xl">
          <IoSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="ml-8 w-full text-gray-700 text-sm focus:outline-none"
            placeholder="Rechercher une voiture (marque, modèle...)"
            onChange={(e) => setSearchCar(e.target.value.toLowerCase())}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <div className="w-full md:w-1/3">
            <Select
              options={marques}
              placeholder="🚗 Marque"
              onChange={(option) => setSelectedMarque(option?.value || "")}
              className="text-sm"
            />
          </div>

          <div className="w-full md:w-1/3">
            <Select
              options={carburants}
              placeholder="⛽ Carburant"
              onChange={(option) => setSelectedCarburant(option?.value || "")}
              className="text-sm"
            />
          </div>

          <button
            onClick={() => {
              setSearchCar("");
              setSelectedMarque("");
              setSelectedCarburant("");
            }}
            className="w-full md:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-xl transition"
          >
            Réinitialiser
          </button>
        </div>

        <div className="flex justify-between items-center mt-6">
          <h2 className="text-lg font-semibold text-gray-700">
            {filteredCars.length} véhicule(s) trouvé(s)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 ">
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => <Card key={index} {...car} />)
          ) : (
            <p className="text-gray-500 col-span-full text-center mt-10">
              Aucun véhicule trouvé pour les critères sélectionnés.
            </p>
          )}
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}
