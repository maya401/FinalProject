// import { useParams, Link } from "react-router-dom";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaGasPump, FaArrowLeft } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import Footer from "../views/footer";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getLocationById, type VenteType } from "../api/vente_location";

export default function DetailPageLocation() {
const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [location, setlocations] = useState<VenteType | null>(null);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

useEffect(() => {
  const fetchLocations = async () => {
    if (!id) {
      setError(true);
      return;
    }

    try {
      setIsLoading(true);
      const response = await getLocationById(id);

      if (!response) {
        setError(true);
      } else {
        setlocations(response);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  fetchLocations();
}, [id]);
  if (isloading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
        <p className="text-gray-500 font-medium animate-pulse">
          Chargement des détails...
        </p>
      </div>
    );
  }

  if (error || !location) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Oups ! 🚗</h2>
        <p className="text-gray-600 mb-6">
          Ce véhicule semble avoir déjà trouvé preneur ou n'existe pas.
        </p>
        <Link
          to="/"
          className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-orange-600 mb-6 transition-colors"
        >
          <FaArrowLeft /> Retour
        </button>

        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          <div className="lg:w-2/3">
            <img
              src={location.imageUrl}
              alt={location.modele}
              className="w-full h-125 object-cover rounded-3xl shadow-lg"
            />
          </div>

          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between h-full">
              <div>
                <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">
                  {location.marque}
                </span>
                <h1 className="text-4xl font-black text-slate-900 mt-2 mb-4">
                  {location.modele}
                </h1>

                <div className="text-3xl font-bold text-slate-800 mb-8">
                  {location.prix.toLocaleString()}{" "}
                  <span className="text-sm text-orange-600">FCFA</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
                    <FaGasPump className="text-orange-600" />
                    <span className="text-sm font-semibold">
                      {location.carburant}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl">
                    <GiGearStickPattern className="text-orange-600" />
                    <span className="text-sm font-semibold">
                      {location.boiteVitesse}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 border-y border-gray-50">
                  <span className="text-gray-500">Année de fabrication</span>
                  <span className="font-bold text-slate-800">
                    {location.annee}
                  </span>
                </div>
              </div>

              <a
                href="https://wa.link/lr42hp"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-200 mt-6"
              >
                <BsWhatsapp className="text-2xl" />
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 relative inline-block">
            Description
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-orange-600 rounded-full"></span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed bg-white p-6 rounded-2xl border border-gray-100">
            {location.description}
          </p>
        </div>
      </div>

      <div className="fixed bottom-10 right-6 flex flex-col items-end gap-3 z-50">
        <div className="bg-white px-4 py-2 rounded-full shadow-xl border border-gray-100 text-sm font-bold text-gray-700 animate-bounce">
          Besoin d'aide ?
        </div>
        <a
          href="https://wa.link/lr42hp"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 p-4 rounded-full shadow-2xl text-white text-3xl hover:scale-110 transition-transform"
        >
          <BsWhatsapp />
        </a>
      </div>

      <Footer />
    </div>
  );
}
