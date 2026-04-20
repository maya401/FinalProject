import React from "react";
import { toast } from "react-hot-toast/headless";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

export default function ConnextionPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
     
     toast.error("Veuillez remplir tous les champs.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`https://backendfp-3.onrender.com/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("STATUS:", response.status);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de la connexion.");
      }
      localStorage.setItem("token", data.token);

     navigate("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Une erreur inconnue est survenue.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="hidden md:flex md:w-1/2 bg-linear-to-br from-orange-500 to-orange-600 p-12 text-white flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold">Bienvenue à SENAUTO</h2>
            <p className="mt-4 text-orange-100 italic">
              "La voiture de votre rêve à un clic."
            </p>
          </div>
          <div className="text-sm text-orange-200">© 2026 SENAUTO.</div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="text-center md:text-left relative">
            <h2 className="text-2xl font-bold text-gray-800 ">Connexion
               <a className="absolute right-0" href="/"><X strokeWidth={1.5} /></a>
            </h2>
            <p className="text-gray-500 mt-2">Ravi de vous revoir !</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="entrez votre email"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="mot de passe svp"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 border-transparent  focus:border-orange-500 focus:bg-white focus:ring-0 text-sm transition-all duration-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-sm"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex items-center justify-between text-xs">
              {/* <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={souvenir}
                  onChange={(e) => setSouvenir(e.target.checked)}
                  className="rounded text-orange-500 focus:ring-orange-500"
                />
                <span className="ml-2 text-gray-600">Se souvenir de moi</span>
              </label> */}
              <a
                href="#"
                className="text-orange-600 hover:underline font-semibold"
              >
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Pas encore de compte ?
              <a
                href="/inscription"
                className="text-orange-600 font-bold ml-1 hover:underline"
              >
                S'inscrire
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
