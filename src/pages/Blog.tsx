import { useState } from "react";

interface Article {
  id: number;
  title: string;
  sommaire: string;
  date: string;
  categorie: string;
  imageUrl: string;
}

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["Entretien", "Actualités", "Guide d'achat"];

  const articles: Article[] = [
    {
      id: 1,
      title: "Les meilleures voitures pour la ville en 2026",
      sommaire:
        "Découvrez notre sélection des voitures compactes idéales pour la conduite urbaine, économes et pratiques.",
      date: "7 avril 2026",
      categorie: "Actualités",
      imageUrl: "https://www.test-auto.fr/wp-content/uploads/2025/10/231020251761236333-600x540.webp",
    },
    {
      id: 2,
      title: "Comment entretenir sa voiture pour durer plus longtemps",
      sommaire:
        "Conseils simples et efficaces pour garder votre véhicule en parfait état et éviter les pannes coûteuses.",
      date: "5 avril 2026",
      categorie: "Entretien",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm94ygbOZNyIN0zzGIBYGihroctTl1kP1whA&s",
    },
    {
      id: 3,
      title: "Les nouvelles tendances automobiles électriques",
      sommaire:
        "Un tour d’horizon des dernières innovations et modèles électriques qui révolutionnent le marché.",
      date: "1 avril 2026",
      categorie: "Actualités",
      imageUrl: "https://img.freepik.com/photos-premium/trafic-roue-technologie-classique-automobile-moderne_665346-119.jpg",
    },
    {
      id: 4,
      title: "Guide pour choisir sa première voiture",
      sommaire:
        "Toutes les étapes et conseils pour choisir une voiture adaptée à vos besoins et votre budget.",
      date: "28 mars 2026",
      categorie: "Guide d'achat",
      imageUrl: "https://www.test-auto.fr/wp-content/uploads/2025/10/231020251761236333-600x540.webp",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.sommaire.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || article.categorie === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="px-4 md:px-10 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Blog</h1>
      <p className="mb-6 text-gray-600">
        Bienvenue sur notre blog ! Retrouvez les dernières actualités,
        conseils d’entretien, guides d’achat et plus encore.
      </p>

     
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Rechercher un article..."
          className="flex-1 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-3 border rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Toutes catégories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <p className="text-gray-600 mb-4">{article.sommaire}</p>
                <span className="inline-block bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-xs font-semibold">
                  {article.categorie}
                </span>
                <button className="mt-4 text-orange-500 font-semibold hover:underline">
                  Lire la suite →
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            Aucun article trouvé 
          </p>
        )}
      </div>
    </div>
  );
}