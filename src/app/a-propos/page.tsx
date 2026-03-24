import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Header } from "../_components/Header";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Fonctionnalités de gestion immobilière : Finance & Calendrier | Foncior",
  description: "Découvrez la solution Foncior : pilotez votre budget, gérez vos réservations (courte et longue durée) et analysez la rentabilité de chaque bien en un clic.",
};
export default function About() {
  return (
    <div>
      <Header
        title="À propos de Foncior : l'entreprise et l'équipe derrière votre gestion immobilière"
        subtitle=""
        buttonText={null}
      />
      <div className="md:mx-20">
        <p className="px-10 py-20 md:mx-auto md:w-175">
          <strong>L&apos;investissement immobilier</strong> est le pilier de
          votre stratégie de finance personnelle. <br />
          Mais attention au paradoxe du propriétaire :{" "}
          <strong>plus votre patrimoine</strong> s&apos;agrandit, plus le suivi
          d&apos;une <strong>location</strong> et{" "}
          <strong>la maîtrise de votre budget</strong> deviennent un véritable
          casse-tête. <br />
          <strong>
            Calculs de rentabilité, suivi des locataires, gestion
            administrative...
          </strong>{" "}
          Ne laissez plus ces contraintes brider votre liberté. <br /> <br />
          Reprenez le contrôle de vos investissements grâce à la solution
          Foncior !
        </p>

        <h2 className="text-primary text-center my-5 px-8 text-4xl md:px-0">
          L&apos;entreprise
        </h2>

        <div className="md:mx-auto md:flex md:max-w-5xl md:items-center md:justify-center md:gap-12">
          <Image
            width={250}
            height={300}
            src="/fonciorIcons.png"
            alt="Logo Foncior"
            className="mx-auto md:mx-0 md:shrink-0"
          />

          <div className="px-8 py-10 md:w-150 md:p-0">
            <p className="pb-8">
              La solution Foncior a été créée pour briser ce paradoxe. Nous
              avons conçu un véritable cockpit qui automatise le suivi de chaque
              location, clarifie l&apos;ensemble de votre finance et met en
              lumière les dérapages de budget avant qu&apos;ils
              n&apos;explosent.
            </p>
            <p>
              Notre but n&apos;est pas de vous faire passer plus de temps sur
              l&apos;administratif, mais au contraire de vous le rendre.
              Concentrez-vous enfin sur ce qui compte vraiment : votre prochaine
              acquisition, ou simplement votre vie.
            </p>
          </div>
        </div>

        <div className="bg-primary text-light-text px-8 py-10 md:mt-10 md:px-40">
          <h2 className="text-2xl font-bold">
            Trois esprits, une vision commune : l&apos;excellence.
          </h2>
          <br />
          <p>
            “Ce projet est né d&apos;une synergie. Nous sommes trois
            entrepreneurs passionnés par l&apos;intersection entre la finance et
            la technologie. Face à la complexité de l&apos;investissement
            immobilier, nous avons décidé d&apos;unir nos forces pour créer
            l&apos;outil définitif.
            <br />
            <br />
            Chacun de nous apporte sa pierre à l&apos;édifice : la rigueur du
            code, l&apos;élégance du design et la logique financière. Ensemble,
            nous concevons Foncior avec l&apos;agilité d&apos;une start-up et
            l&apos;exigence d&apos;une banque privée. Notre objectif n&apos;est
            pas de faire un énième logiciel de gestion, mais de forger le
            standard de l&apos;industrie pour les investisseurs indépendants.”
          </p>
          <br />
          <p className="italic">Axel Marie, Chef du projet</p>
        </div>

        <div>
          <h2 className="text-center text-primary my-5 px-8 text-4xl md:mt-16 md:px-0">
            L&apos;équipe
          </h2>

          <div className="mb-15 px-4 md:mx-auto md:max-w-3xl">
            <h2 className="text-primary pt-5 text-xl font-bold">
              Axel Marie - Chef de projet
            </h2>

            <div className=" pt-10 md:flex md:items-center md:justify-center md:gap-10">
              <div className="float-left mr-4 ml-6 md:float-none md:m-0 md:shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="/AxelAvatar.png"
                  alt="Avatar de Axel Marie"
                  className="rounded-full object-cover"
                />
              </div>

              <p className="text-justify md:flex-1 md:text-left md:text-base">
                Fort de 3 années d&apos;expérience en développement
                informatique, je pilote la conception de Foncior. Mon rôle est
                de coordonner nos équipes techniques et de superviser le projet
                de A à Z pour vous offrir un outil immobilier fiable et
                performant.
              </p>

              <div className="clear-both md:hidden"></div>
            </div>
          </div>

          <div className="mb-15 px-4 md:mx-auto md:max-w-3xl">
            <h2 className="text-primary pt-5pt text-xl font-bold">
              Maxence Rebours - Responsable technique
            </h2>

            <div className=" pt-10 md:flex md:flex-row-reverse md:items-center md:justify-center md:gap-10">
              <div className="float-right mr-4 ml-6 md:float-none md:m-0 md:shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="/MaxenceAvatar.png"
                  alt="Avatar de Maxence REBOURS"
                  className="rounded-full object-cover"
                />
              </div>

              <p className="text-justify md:flex-1 md:text-left md:text-base">
                Du premier croquis à l&apos;intégration finale, je donne vie à
                Foncior. Fort de cette double compétence, je m&apos;assure que
                notre plateforme allie une ergonomie irréprochable à un
                développement millimétré. Mon but : rendre la gestion de vos
                actifs véritablement agréable et sans friction.
              </p>

              <div className="clear-both md:hidden"></div>
            </div>
          </div>

          <div className="mb-15 px-4 md:mx-auto md:max-w-3xl">
            <h2 className="text-primary pt-5 text-xl font-bold">
              Clément Auger - Responsable SEO/SEA
            </h2>

            <div className=" pt-10 md:flex md:items-center md:justify-center md:gap-10">
              <div className="float-left mr-4 ml-6 md:float-none md:m-0 md:shrink-0">
                <Image
                  width={100}
                  height={100}
                  src="/ClementAvatar.png"
                  alt="Avatar de Clément Auger"
                  className="rounded-full object-cover"
                />
              </div>

              <p className="text-justify md:flex-1 md:text-left md:text-base">
                À la croisée de la technique et de l&apos;expérience
                utilisateur, j’oriente le développement de Foncior. Mon rôle de
                Responsable SEO me permet de traduire vos besoins complexes en
                fonctionnalités simples. Je m&apos;assure que notre plateforme
                allie un design fluide à une précision financière absolue. Mon
                but : transformer la gestion de vos locations en une expérience
                sans stress, où tout est sous contrôle.
              </p>

              <div className="clear-both md:hidden"></div>
            </div>
          </div>
          <div className="flex justify-center p-8 md:items-center md:gap-12 mb-12 mt-20 mx-auto shrink-0">
            <Link href="/solution">
              <Button variant="default" size="lg" className="mt-0 w-60 text-xl">
                Découvrir notre solution
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
