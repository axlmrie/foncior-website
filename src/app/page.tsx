import Link from "next/link";
import { api, HydrateClient } from "@/trpc/server";
import { Button } from '@/components/ui/button';
import { Header } from "./_components/Header";

export default async function Home() {


  return (
    <HydrateClient>
      <main className="min-h-screen bg-white flex flex-col">
        <Header 
          title=" Foncior, la solution globale qui révolutionne votre quotidien de propriétaire."
          subtitle="Gestionnaire de patrimoine immobilier."
          buttonText="Découvrez-nous"
          onButtonClick={() => {}}
        />

        <h3 className="text-center px-8 my-20 text-l font-bold" >
          Libérez-vous enfin de la charge mentale immobilière. Foncior est la solution ultime pour centraliser la finance et la gestion de tout votre patrimoine. Laissez notre cockpit interactif travailler pour vous
        </h3>

        <h1>Pourquoi choisir notre solution pour votre gestion locative ?</h1>

        <div>
          <ul className="list-disc mx-10 " >
            <li><strong>Suivi sur-mesure :</strong> Maîtrisez le budget de chaque bien en temps réel.</li>
            <li><strong>Gestion simplifiée :</strong> Organisez chaque location (Airbnb, longue durée...) et fluidifiez les échanges avec vos locataires.</li>
            <li><strong>Visibilité totale :</strong> Centralisez vos biens grâce à notre planning intégré. Reprenez le contrôle de vos investissements dès aujourd'hui !</li>
          </ul>
        </div>

      </main>
    </HydrateClient>
  );
}