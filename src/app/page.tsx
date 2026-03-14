import Link from "next/link";
import { api, HydrateClient } from "@/trpc/server";
import { Button } from '@/components/ui/button';
import { Header } from "./_components/Header";
import Image from "next/image";

export default async function Home() {


  return (
    <HydrateClient>
      <main className="min-h-screen flex flex-col">
        <Header 
          title=" Foncior, la solution globale qui révolutionne votre quotidien de propriétaire."
          subtitle={null}
          buttonText="Découvrez-nous"
          onButtonClick={() => {console.log("contact")}}
        />
        
        <p className="text-center mx-auto my-10 md:w-200 text-sm px-4x  md:text-lg font-bold" >
          Libérez-vous enfin de la charge mentale immobilière. Foncior est la solution ultime pour centraliser la finance et la gestion de tout votre patrimoine. Laissez notre cockpit interactif travailler pour vous
        </p>

        <h2 className="text-center px-4x my-5 text-primary  md:text-2xl">Pourquoi choisir notre solution pour votre gestion locative ?</h2>

        <div className="md:flex md:items-center md:justify-evenly md:my-10 md:gap-12">
          <Image
            width={300}
            height={484}
            src="/ComputerLocation.png"
            alt="Illustration"
            className="mx-auto my-10 md:my-0 md:mx-0"
          />

          <div>
            <ul className="list-disc mx-10 mb-20 md:w-100 md:m-0">
              <li className="py-2">
                <h3 className="text-xl text-primary font-bold inline">Suivi sur-mesure : </h3> 
                <p className="inline">Maîtrisez le budget de chaque bien en temps réel.</p>
              </li>

              <li className="py-2">
                <h3 className="text-xl text-primary font-bold inline">Gestion simplifiée : </h3> 
                <p className="inline">Organisez chaque location (Airbnb, longue durée...) et fluidifiez les échanges avec vos locataires.</p>
              </li>

              <li className="py-2">
                <h3 className="text-xl text-primary font-bold inline">Visibilité totale : </h3> 
                <p className="inline">Centralisez vos biens grâce à notre planning intégré. Reprenez le contrôle de vos investissements dès aujourd&apos;hui !</p>
              </li>
            </ul>
          </div>
        </div>

      </main>
    </HydrateClient>
  );
}