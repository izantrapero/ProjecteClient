// src/types.ts
export interface Personatge {
  _id: string;
  nom: string;
  tipus: "Pluma" | "Ligero" | "Semimedio" | "Medio" | "Pesado Medio" | "Pesado" | "Super Pesado";
  velocitat: number;
  acceleracio: number;
  pes: number;
  monedas: number;
  miniturbo: number;
  maneig: number;
}

export interface Vehicle {
  _id: string;
  nom: string;
  tipus: "Moto" | "Kart" | "ATV";
  velocitat: number;
  acceleracio: number;
  pes: number;
  monedas: number;
  miniturbo: number;
  maneig: number;
}