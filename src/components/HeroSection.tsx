
import Carte from "./composRutilisable/carte";


export default function HeroSection() {
 
  return (
    <div className=" bg-[url(images/modern-family.jpg)] bg-black/40 bg-blend-multiply bg-center bg-no-repeat bg-cover h-[90vh]  w-full mb-16 ">
      <div className="flex flex-col gap-8 mt-70 container ">
        <Carte
          title="Acheter et louer"
          title1="des voitures en toute sérénité"
          className={"text-4xl leading-8 font-bold text-white" }
        />
       <div className="bg-white w-90 md:w-100 lg:w-125  p-2 rounded-xl flex ">
        <form className="flex justify-between w-full max-w-2xl">
          <input type="text"
           className="text-gray-500 text-lg w-full focus:outline-none " 
           placeholder="rechercher votre voiture "
           
           />

          <button className="bg-orange-600 px-4 rounded-xl py-2.5 text-white  hover:bg-orange-700 transition-all duration-300">
            <span className="" >Rechercher</span> 
          </button>
        </form>
      </div>
      </div>
      
    </div>
  );
}


