import { marques } from "../datas/marqueDatas";
import { carburants } from "../datas/CarburantDatas";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import Select from "react-select";
import Footer from "../views/footer";
import { Outlet } from "react-router-dom";
import { getLocation, type VenteType } from "../api/vente_location";
import Card from "../components/composRutilisable/Card";

type TypeLocation = "journée" | "semaine" | "mois";

const typesLocation = [
  { label: "Journée", value: "journée" },
  { label: "Semaine", value: "semaine" },
  { label: "Mois", value: "mois" },
];

export default function LocationPage() {
  const [searchCar, setSearchCar] = useState("");
  const [selectedMarque, setSelectedMarque] = useState("");
  const [selectedCarburant, setSelectedCarburant] = useState("");
  const [selectedTypeLocation, setSelectedTypeLocation] = useState<
    TypeLocation | ""
  >("");

  const [ventes, setVentes] = useState<VenteType[]>([]);
  const [isloading, setIsLoading] = useState(false);

  const fetchVentes = async () => {
    try {
      setIsLoading(true);
      const response = await getLocation();
      setVentes(response);
    } catch (error) {
      console.error("Erreur fetchLocation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVentes();
  }, []);

  const filteredCars = ventes.filter((car) => {
    return (
      (searchCar === "" ||
        car.marque.toLowerCase().includes(searchCar) ||
        car.modele.toLowerCase().includes(searchCar)) &&
      (selectedMarque === "" ||
        car.marque.toLowerCase() === selectedMarque.toLowerCase()) &&
      (selectedCarburant === "" ||
        car.carburant.toLowerCase() === selectedCarburant.toLowerCase()) &&
      (selectedTypeLocation === "" ||
        car.typedeLocation === selectedTypeLocation)
    );
  });

  if (isloading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Chargement des voitures...</p>
      </div>
    );
  }

  return (
    <div >
      <div className="px-4 md:px-10 mb-10">
        <div className="relative bg-white shadow-sm border rounded-2xl p-4 mt-10">
          <IoSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une voiture..."
            className="ml-8 w-full text-sm outline-none"
            onChange={(e) => setSearchCar(e.target.value.toLowerCase())}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <Select
            options={marques}
            placeholder="🚗 Marque"
            onChange={(option) => setSelectedMarque(option?.value || "")}
            className="w-full"
          />

          <Select
            options={carburants}
            placeholder="⛽ Carburant"
            onChange={(option) => setSelectedCarburant(option?.value || "")}
            className="w-full"
          />

          <Select
            options={typesLocation}
            placeholder="📅 Type de location"
            onChange={(option) =>
              setSelectedTypeLocation(option?.value as TypeLocation)
            }
            className="w-full"
          />

          <button
            onClick={() => {
              setSearchCar("");
              setSelectedMarque("");
              setSelectedCarburant("");
              setSelectedTypeLocation("");
            }}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl text-sm"
          >
            Réinitialiser
          </button>
        </div>

        <div className="flex justify-between mt-6">
          <h2 className="text-lg font-semibold text-gray-700">
            {filteredCars.length} véhicule(s) trouvé(s)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {filteredCars.length > 0 ? (
            filteredCars.map((car, index) => <Card key={index} {...car} />)
          ) : (
            <p className="text-gray-500 text-center col-span-full">
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
