import { type Metadata } from "next";
import BetaClient from "./BetaClient";

export const metadata: Metadata = {
  title: "Rejoignez la Bêta Foncior | Votre cockpit immobilier en avant-première",
  description: "Inscrivez-vous à la Bêta privée de Foncior et soyez parmi les premiers à tester l'outil ultime pour centraliser vos investissements locatifs.",
};

export default function BetaPage() {
    return <BetaClient />;
}