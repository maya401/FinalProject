
import { marques } from "../datas/marqueDatas";

export default function Categorie() {
  
  return (
    <div className="container mt-20  flex flex-col mb-10">
      <h1 className="text-center underline">
        Rechercher par marque de voiture
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-y-8 mt-10 ">
        {/* Contenu des catégories par marques */}
        {marques.map((logo, index) => (
          <a
          href={logo.link}
            key={index}
            className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img
              src={logo.image}
              alt={logo.label}
              className="h-16 w-16 object-contain "
            />
            <span className="text-sm font-medium">{logo.label}</span>
          </a>
        ))}
        <div></div>
      </div>
    </div>
  );
}
