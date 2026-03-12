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

            <p className="px-10 py-20 md:w-175 md:mx-auto" >
                L'investissement immobilier est le pilier de votre stratégie de finance personnelle. <br /> 
                Mais attention au paradoxe du propriétaire : plus votre patrimoine s'agrandit, plus le suivi d'une location et la maîtrise de votre budget deviennent un véritable casse-tête. <br /> 
                Calculs de rentabilité, suivi des locataires, gestion administrative... Ne laissez plus ces contraintes brider votre liberté. <br /> <br /> 
                Reprenez le contrôle de vos investissements grâce à la solution Foncior !
            </p>

            <h1 className="px-8 my-5 text-primary text-4xl">L'entreprise</h1>

            <div className="md:flex md:justify-center md:items-center md:gap-12 md:max-w-5xl md:mx-auto" >
                <Image
                    width={250}
                    height={300}
                    src="/fonciorIcons.png"
                    alt="Logo Foncior"
                    className="mx-auto md:mx-0 md:shrink-0"
                />

                <div className="px-8 py-10 md:w-150 md:p-0" >
                    <p className="pb-8">
                        La solution Foncior a été créée pour briser ce paradoxe. Nous avons conçu un véritable cockpit qui automatise le suivi de chaque location, clarifie l'ensemble de votre finance et met en lumière les dérapages de budget avant qu'ils n'explosent.
                    </p>
                    <p>
                        Notre but n'est pas de vous faire passer plus de temps sur l'administratif, mais au contraire de vous le rendre. Concentrez-vous enfin sur ce qui compte vraiment : votre prochaine acquisition, ou simplement votre vie.
                    </p>
                </div>
            </div>

            <div className="bg-primary text-light-text px-8 py-10 md:px-40 md:mt-10 " >
                <h2 className="font-bold text-2xl " >
                    Trois esprits, une vision commune : l'excellence.
                </h2>
                <br />
                <p>
                    “Ce projet est né d'une synergie. Nous sommes trois entrepreneurs passionnés par l'intersection entre la finance et la technologie. Face à la complexité de l'investissement immobilier, nous avons décidé d'unir nos forces pour créer l'outil définitif.
                    <br /><br />
                    Chacun de nous apporte sa pierre à l'édifice : la rigueur du code, l'élégance du design et la logique financière. Ensemble, nous concevons Foncior avec l'agilité d'une start-up et l'exigence d'une banque privée. Notre objectif n'est pas de faire un énième logiciel de gestion, mais de forger le standard de l'industrie pour les investisseurs indépendants.”
                </p>
                <br />
                <p className="italic" >
                   Axel Marie Chef du projet 
                </p>
            </div>


            <div>
                <h1 className="px-8 my-5 text-primary text-4xl md:mt-16">L'équipe</h1>
                
                <div className="mb-15 md:max-w-3xl md:mx-auto" >
                    <h2 className="text-primary font-bold text-center py-5 text-xl">
                        Axel Marie - Chef de projet
                    </h2>
                    
                    <div className="pt-10 px-4 md:flex md:items-center md:justify-center md:gap-10"> 

                        <div className="float-left ml-6 mr-4 md:float-none md:m-0 md:shrink-0">
                            <Image
                                width={100}
                                height={100} 
                                src="/AxelAvatar.png"
                                alt="Avatar de Axel Marie"
                                className="rounded-full object-cover"
                            />
                        </div>

                        <p className="text-justify md:text-left md:text-base md:flex-1">
                            Fort de 3 années d'expérience en développement informatique, je pilote la conception de Foncior. Mon rôle est de coordonner nos équipes techniques et de superviser le projet de A à Z pour vous offrir un outil immobilier fiable et performant.
                        </p>

                        <div className="clear-both md:hidden"></div>
                    </div>
                </div>

                <div className="mb-15 md:max-w-3xl md:mx-auto" >
                    <h2 className="text-primary font-bold text-center py-5 text-xl">
                        Maxence REBOURS - Responsable technique
                    </h2>
                    
                    <div className="pt-10 px-4 md:flex md:flex-row-reverse md:items-center md:justify-center md:gap-10"> 

                        <div className="float-right ml-6 mr-4 md:float-none md:m-0 md:shrink-0">
                            <Image
                                width={100}
                                height={100} 
                                src="/MaxenceAvatar.png"
                                alt="Avatar de Maxence REBOURS"
                                className="rounded-full object-cover"
                            />
                        </div>

                        <p className="text-justify md:text-left md:text-base md:flex-1">
                            Du premier croquis à l'intégration finale, je donne vie à Foncior. Fort de cette double compétence, je m'assure que notre plateforme allie une ergonomie irréprochable à un développement millimétré.
                            Mon but : rendre la gestion de vos actifs véritablement agréable et sans friction.
                        </p>

                        <div className="clear-both md:hidden"></div>
                    </div>
                </div>

                <div className="mb-15 md:max-w-3xl md:mx-auto" >
                    <h2 className="text-primary font-bold text-center py-5 text-xl">
                        Clément Auger - Responsable SEO/SEA
                    </h2>
                    
                    <div className="pt-10 px-4 md:flex md:items-center md:justify-center md:gap-10"> 

                        <div className="float-left ml-6 mr-4 md:float-none md:m-0 md:shrink-0">
                            <Image
                                width={100}
                                height={100} 
                                src="/ClementAvatar.png"
                                alt="Avatar de Clément Auger"
                                className="rounded-full object-cover"
                            />
                        </div>

                        <p className="text-justify md:text-left md:text-base md:flex-1">
                            À la croisée de la technique et de l'expérience utilisateur, j’oriente le développement de Foncior. Mon rôle de Responsable SEO me permet de traduire vos besoins complexes en fonctionnalités simples. Je m'assure que notre plateforme allie un design fluide à une précision financière absolue. Mon but : transformer la gestion de vos locations en une expérience sans stress, où tout est sous contrôle.
                        </p>

                        <div className="clear-both md:hidden"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}