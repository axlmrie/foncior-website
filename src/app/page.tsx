import Link from "next/link";
import { api, HydrateClient } from "@/trpc/server";
import { Button } from "@/components/ui/button";
import { Header } from "./_components/Header";
import Image from "next/image";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Foncior | Logiciel de gestion locative et suivi de patrimoine",
  description: "Libérez-vous de la charge mentale immobilière avec Foncior. Centralisez vos finances, gérez vos locations et suivez la rentabilité de votre patrimoine.",
};
export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col">
        <Header
          title=" Foncior, la solution globale qui révolutionne votre quotidien de propriétaire."
          subtitle={null}
          buttonText="Découvrez-nous"
          buttonLink="/about"
        />

        <p className="px-4x mx-auto my-10 text-center text-sm font-bold md:w-200 md:text-lg">
          Libérez-vous enfin de la charge mentale immobilière. Foncior est la
          solution ultime pour centraliser la finance et la gestion de tout
          votre patrimoine. Laissez notre cockpit interactif travailler pour
          vous
        </p>

        <h2 className="px-4x text-primary my-5 text-center md:text-2xl">
          Pourquoi choisir notre solution pour votre gestion locative ?
        </h2>

        <div className="md:mt-10 md:flex md:items-center md:justify-evenly md:gap-5">
          <Image
            width={300}
            height={484}
            src="/ComputerLocation.png"
            alt="Illustration"
            className="mx-auto my-10 md:mx-0 md:my-0"
          />

          <div>
            <ul className="mx-10 mb-20 list-disc md:m-0 md:w-100">
              <li className="py-2">
                <h3 className="text-primary inline text-xl font-bold">
                  Suivi sur-mesure :{" "}
                </h3>
                <p className="inline">
                  Maîtrisez le budget de chaque bien en temps réel.
                </p>
              </li>

              <li className="py-2">
                <h3 className="text-primary inline text-xl font-bold">
                  Gestion simplifiée :{" "}
                </h3>
                <p className="inline">
                  Organisez chaque location (Airbnb, longue durée...) et
                  fluidifiez les échanges avec vos locataires.
                </p>
              </li>

              <li className="py-2">
                <h3 className="text-primary inline text-xl font-bold">
                  Visibilité totale :{" "}
                </h3>
                <p className="inline">
                  Centralisez vos biens grâce à notre planning intégré. Reprenez
                  le contrôle de vos investissements dès aujourd&apos;hui !
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center p-8 md:items-center md:gap-12">
          <Link href="/solution">
            <Button variant="default" size="lg" className="mt-0 w-60 text-xl">
              Découvrir notre solution
            </Button>
          </Link>
        </div>
      </main>
    </HydrateClient>
  );
}
