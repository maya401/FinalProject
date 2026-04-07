import api from "./api";

export const getVente = async () => {
  const response = await api.get("ventes");
  return response.data;
};

export const getVenteById = async (id: string | undefined) => {
    if (!id) throw new Error("ID manquant");
  const response = await api.get(`/ventes/${id}`)
  return response.data;
};

export const getLocation = async () => {
  const response = await api.get("locations");
  return response.data;
};

export const getLocationById = async (id: string | undefined) => {
  const response = await api.get(`/locations/${id}`);
  return response.data;
};


type TypeLocation = "journée" | "semaine" | "mois";

export interface VenteType {
  marque: string;
  modele: string;
  description: string;
  annee: number;
  carburant: string;
  boiteVitesse: string;
  prix: number;
  statut: boolean;
  imageUrl: string;
  _id: string;
  className?: string;
  typedeLocation?: TypeLocation;
  count?: number;
}
