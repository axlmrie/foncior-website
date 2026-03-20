import { type Metadata } from "next";
import TarifsClient from "./TarifsClient";

export const metadata: Metadata = {
  title: "Tarifs Foncior | Offres de gestion locative (Gratuit & Pro)",
  description: "Consultez nos abonnements adaptés à vos besoins. De la gestion gratuite pour un seul bien, à l'offre Pro pour optimiser l'ensemble de votre parc immobilier.",
};

export default function TarifsPage() {
  return <TarifsClient />;
}