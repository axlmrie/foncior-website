import Image from "next/image"
import { Header } from "../_components/Header"

export default function About(){
    return (
        <div>
            <Header 
            title="A Propos"
            subtitle={null}
            buttonText={null}
            onButtonClick={() => {}}
            />

            <p className="px-10 py-20" >
                L'investissement immobilier est le pilier de votre stratégie de finance personnelle. <br /> 
                Mais attention au paradoxe du propriétaire : plus votre patrimoine s'agrandit, plus le suivi d'une location et la maîtrise de votre budget deviennent un véritable casse-tête. <br /> 
                Calculs de rentabilité, suivi des locataires, gestion administrative... Ne laissez plus ces contraintes brider votre liberté. <br /> <br /> 
                Reprenez le contrôle de vos investissements grâce à la solution Foncior !
            </p>

            <h1 className="px-8 my-5 text-primary text-4xl  md:text-2xl">L'entreprise</h1>

            <div>
                <Image
                    width={250}
                    height={300}
                    src="/fonciorIcons.png"
                    alt="Logo Foncior"
                    className="mx-auto"
                />

                <div className="px-8 py-10 " >
                    <p className="pb-8">
                        La solution Foncior a été créée pour briser ce paradoxe. Nous avons conçu un véritable cockpit qui automatise le suivi de chaque location, clarifie l'ensemble de votre finance et met en lumière les dérapages de budget avant qu'ils n'explosent.
                    </p>
                    <p>
                        Notre but n'est pas de vous faire passer plus de temps sur l'administratif, mais au contraire de vous le rendre. Concentrez-vous enfin sur ce qui compte vraiment : votre prochaine acquisition, ou simplement votre vie.
                    </p>
                </div>
            </div>
            <div >
                <h1 className="px-8 my-5 text-primary text-4xl  md:text-2xl">L'équipe</h1>
                <div className="h-[100vh]" >
                    <h2 className="text-primary font-bold text-center py-5 text-xl" >Axel Marie - Chef de projet</h2>
                    <p>Fort de 3 années d'expérience en développement informatique, je pilote la conception de Foncior. Mon rôle est de coordonner nos équipes techniques et de superviser le projet de A à Z pour vous offrir un outil immobilier fiable et performant.</p>

                </div>

            </div>

        </div>
    )
}