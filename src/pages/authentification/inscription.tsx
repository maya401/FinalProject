

import React from "react";

export default function InscriptionPage() {
  const [prenom, setPrenom] = React.useState("");
  const [nom, setNom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!prenom || !nom || !email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prenom, nom, email, password }),
      });

      const text = await res.text();
      let data;

      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        throw new Error("Réponse invalide du serveur");
      }

      if (!res.ok) {
        throw new Error(data.message || "Erreur d'inscription");
      }

    
      window.location.href = "/connexion";
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Une erreur inconnue est survenue");
      }
    } finally {
      setLoading(false);
    }
  };

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
          <div className="text-sm text-orange-200">© 2026 SENAUTO.</div>
        </div>

        
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Inscription</h2>
            <p className="text-gray-500 mt-2">Commencez dès aujourd'hui.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Prénom</label>
                <input
                  type="text"
                  placeholder="votre prenom"
                  className="w-full mt-1 px-4 py-2.5 rounded-lg bg-gray-100 focus:border-orange-500 focus:bg-white text-sm"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  placeholder="votre nom"
                  className="w-full mt-1 px-4 py-2.5 rounded-lg bg-gray-100 focus:border-orange-500 focus:bg-white text-sm"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="votre email"
                className="w-full mt-1 px-4 py-2.5 rounded-lg bg-gray-100 focus:border-orange-500 focus:bg-white text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="votre mot de passe"
                  className="w-full mt-1 px-4 py-2.5 rounded-lg bg-gray-100 focus:border-orange-500 focus:bg-white text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-sm"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg"
            >
              {loading ? "Inscription..." : "Créer mon compte"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Déjà un compte ?
              <a href="/connexion" className="text-orange-600 font-bold ml-1 hover:underline">
                Se connecter
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


