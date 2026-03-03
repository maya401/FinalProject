

export default function InscriptionPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row-reverse">
        
       
        <div className="hidden md:flex md:w-1/2 bg-linear-to-tr from-orange-600 to-orange-400 p-12 text-white flex-col justify-between items-center text-center">
          <div>
            <h2 className="text-3xl font-bold">Bienvenue à SENAUTO</h2>
            <p className="mt-4 text-orange-100 italic">
              "La voiture de votre rêve à un clic."
            </p>
          </div>
          <div className="text-sm text-orange-200">
            © 2026 SENAUTO.
          </div>
        </div>

       
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Inscription</h2>
            <p className="text-gray-500 mt-2">Commencez dès aujourd'hui.</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Prénom</label>
                <input 
                  type="text" 
                  className="w-full mt-1 px-4 py-2.5 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all"
                  placeholder="votre prenom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input 
                  type="text" 
                  className="w-full mt-1 px-4 py-2.5 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all"
                  placeholder="votre nom"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                className="w-full mt-1 px-4 py-2.5 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all"
                placeholder="votre email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input 
                type="password" 
                className="w-full mt-1 px-4 py-2.5 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all"
                placeholder="votre mot de passe"
              />
             
            </div>


            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 mt-4">
              Créer mon compte
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Déjà un compte ? 
              <a href="/connexion" className="text-orange-600 font-bold ml-1 hover:underline">Se connecter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

