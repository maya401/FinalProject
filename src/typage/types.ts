import type { ReactNode } from "react";

export interface menuType{
    name: string;
    link:string;
}

export interface CarteProps{
    title:string;
    title1?:string;
    description?: string;
    className?:string
    
}

export interface CardProps{
    id:number
    marque:ReactNode;
    modele:string;
    annee:number;
    prix:number;
    imageUrl:string;
    boiteVitesse?:string;
    Carburant?:string;
    className?:string;
    status?:boolean;
    value?:string;
    label?:string;
}