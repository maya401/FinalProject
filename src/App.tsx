import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccueilPage from "./pages/Accueil";
import BlogPage from "./pages/Blog";
import VendrePage from "./pages/Vendre";
import { NavBar } from "./components/navbar";
import LocationPage from "./pages/Louer";
import DetailPage from "./pages/DetailPage";
import ConnextionPage from "./pages/authentification/connexion";
import InscriptionPage from "./pages/authentification/inscription";
import Sidebar from "./pages/Dashboard/sidebar";
import Profil from "./pages/Dashboard/profil";
import Avendre from "./pages/Dashboard/avendre";
import Alouer from "./pages/Dashboard/alouer";
import Dashbord from "./pages/Dashboard/dashbord";
import AjoutVoiture from "./pages/Dashboard/AjoutVoiture";
import LouerVoiture from "./pages/Dashboard/louerVoiture";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<AccueilPage />} />
            <Route path="/vente" element={<VendrePage />} />
            <Route path="/vente/:id" element={<DetailPage />} />
            <Route path="/louer" element={<LocationPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Route>
        </Routes>

        <Routes>
          <Route path="/connexion" element={<ConnextionPage />} />
          <Route path="/inscription" element={<InscriptionPage />} />
        </Routes>

        <Routes>
          <Route path="/dashboard" element={<Sidebar />}>
            <Route index element={<Dashbord/>} />
            <Route path="profil" element={<Profil />} />
            <Route path="avendre" element={<Avendre />} />
            <Route path="alouer" element={<Alouer/>} />
            <Route path="ajout-voiture" element={<AjoutVoiture />} />
            <Route path="louer-voiture" element={<LouerVoiture />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
