import { type Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contactez Foncior | Échangeons sur votre gestion de patrimoine",
  description: "Une question sur notre solution ou besoin d'aide pour gérer vos biens immobiliers ? L'équipe Foncior est à votre écoute.",
};

export default function Contact() {
    return <ContactClient />;
}