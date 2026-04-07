export default function Footer() {
  return (
    <footer className="bg-orange-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold tracking-wide">SEN AUTO</h2>
          <p className="text-sm text-orange-100 mt-1">
            Location & vente de véhicules en toute simplicité
          </p>
        </div>

        <div className="flex justify-center gap-6 text-sm mb-6">
          <a href="/" className="hover:text-orange-200 transition">
            Accueil
          </a>
          <a href="/vente" className="hover:text-orange-200 transition">
            Ventes
          </a>
          <a href="/louer" className="hover:text-orange-200 transition">
            Locations
          </a>
          <a href="/" className="hover:text-orange-200 transition gap-2 flex items-center">
            <span className="text-xs ms-1 ">Appeler-nous au</span>
            <span className="font-bold  text-sm">+221 77 234 45 64</span>
          </a>
        </div>

        <div className="border-t border-orange-500 mb-4"></div>

        <p className="text-center text-xs text-orange-200">
          © {new Date().getFullYear()} SEN AUTO. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
