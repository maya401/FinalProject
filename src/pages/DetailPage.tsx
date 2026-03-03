import { useParams } from "react-router-dom";
import { carDonnees } from "../datas/carDatas";
import { FaGasPump } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";
import Footer from "../views/footer";
import { BsWhatsapp } from "react-icons/bs";
export default function DetailPage() {
  const { id } = useParams();
  const index = Number(id) - 1;

  return (
    <div>
      <div className="container flex justify-between items-center space-x-10 mt-10 mb-20">
        <div className="w-2/3 ">
          <img
            src={`/${carDonnees[index].imageUrl}`}
            alt={carDonnees[index].label}
            className="w-full h-98 object-fit rounded-xl "
          />
        </div>

        <div className="w-1/3 bg-orange-50 shadow-md h-98 rounded-xl p-5 flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-orange-600 mt-5 mb-5">
            {carDonnees[index].label}
          </h2>

          <div className="bg-white rounded-xl shadow-md ">
            <p className="text-orange-600 text-lg font-bold p-2">
              Prix: {carDonnees[index].prix} FCFA
            </p>
            <div className="flex items-center p-5 rounded-xl">
              
              <p className="flex  items-center gap-2  mr-3">
                <FaGasPump /> : {carDonnees[index].Carburant}
              </p>
              <p className="flex items-center gap-2 ">
                <GiGearStickPattern /> : {carDonnees[index].boiteVitesse}
              </p>
            </div>
            <p className="text-orange-600 text-lg font-bold p-5">Année: {carDonnees[index].annee}</p>
            <div className=" flex items-center gap-5 p-5">
              <p>Discuter sur whatsapp</p>
              <a href="https://wa.link/lr42hp">
                <BsWhatsapp className="text-white text-4xl bg-green-400 rounded-full " />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-20">
        <h2 className="text-2xl font-bold text-orange-600 mb-5">Description</h2>
        <p className="text-gray-700 text-lg leading-7 w-1/2">
          {carDonnees[index].description}
        </p>
      </div>

      <div className="fixed bottom-10 right-10 flex flex-col items-center gap-2">
        <a
          href="https://wa.link/lr42hp"
          className="bg-gray-300 px-6 py-2 rounded-3xl"
        >
          Contactez-Nous
        </a>
        <a href="https://wa.link/lr42hp">
          <BsWhatsapp className="text-white text-4xl bg-green-400 rounded-full " />
        </a>
      </div>
      <Footer />
    </div>
  );
}
