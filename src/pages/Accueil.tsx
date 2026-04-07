import { BsWhatsapp } from "react-icons/bs";
import HeroSection from "../components/HeroSection";
import SecondSection from "../components/secondsection";
import Categorie from "../views/Categorie";
import Footer from "../views/footer";
import TrosiemeSection from "../views/Location";





export default function AccueilPage() {
  return (
    <div className="flex flex-col ">
      <HeroSection/>
      <SecondSection/>
      <TrosiemeSection/>
      <Categorie/>
      <Footer/>
    <div className="fixed bottom-5 right-5 flex flex-col items-center gap-2">
       <a href="https://wa.link/lr42hp" className="bg-gray-300 px-6 py-2 rounded-3xl">Contactez-Nous</a>
        <a href="https://wa.link/lr42hp"><BsWhatsapp className="text-white text-4xl bg-green-400 rounded-full " /></a>
      </div>
    </div>
  )
}
