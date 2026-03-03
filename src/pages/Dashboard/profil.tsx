

export default function Profil() {
 
  
  return (
    <div>
      <div className="w-2/3 ">
        <p>Profil utilisateur</p>

        <div className="flex space-x-4 items-center">
        <img src="/images/pp cv.jpg" alt="photo profil" className="rounded-full w-30 h-20" />
        <button className="bg-orange-400 w-60 h-10 rounded-xl text-white" >ajouter une photo</button>
        <button className="bg-orange-400 w-60 h-10 rounded-xl text-white">Supprimer la photo</button>
        </div>
      </div>
      
      <form className=" mt-4 flex flex-col gap-4">
        <label >Nom d'utilisateur</label>
        <input type="text" className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300"/>
        <label >Email</label>
        <input type="email" className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300"/>
        <label >telephone</label>
        <input type="text" className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300"/>
        <textarea className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300" placeholder="à propos de moi"></textarea>
        <div className="flex gap-5">
        <button className="bg-orange-400 w-50 h-10 rounded-xl text-white mt-4">Enregistrer </button>
        <button className="bg-orange-400 w-50 h-10 rounded-xl text-white mt-4">Annuler </button>
        </div>
      </form>
    </div>
  )
}
    