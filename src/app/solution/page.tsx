import { Header } from "../_components/Header"
import Image from "next/image"
export default function Solution(){
    return (
        <div>
            <Header 
                title="Notre solution"
                subtitle="Avec Foncior, reprenez le contrôle de votre patrimoine en toute simplicité."
                buttonText={null}
                onButtonClick={() => {console.log("contact")}}
            />
            <div className="my-15 md:mx-20 " >
                <div >
                    <h1 className="my-5 text-primary text-4xl mx-8 md:mx-0">
                        Finance
                    </h1>
                    <div className="md:flex md:items-center md:justify-arround md:mt-10 ">
                        <Image 
                            src="/ComputerFinanceTable.png" 
                            alt="Page finance" 
                            width={300} 
                            height={400} 
                            className="mx-auto"
                        />
                        <p className="md:mt-0 mt-8 w-70 mx-auto md:w-150" >
                           Faites de la finance votre meilleure alliée. Avec Foncior, pilotez le budget de vos investissements sans effort. Suivez le capital restant dû de vos emprunts pour chaque location directement depuis votre espace. Véritable solution d&apos;aide à la décision, Foncior vous permet de générer instantanément des reportings et attestations de revenus fiables pour vos partenaires bancaires. 
                        </p>
                    </div>
                </div>
                <div className="md:mt-15">
                    <h1 className="my-5 text-primary text-4xl mx-8 md:mx-0">
                        Calendrier
                    </h1>
                    <div className="md:flex md:items-center md:justify-arround md:flex-row-reverse md:mt-10 " >
                        <Image 
                            src="/ComputerCalendarTable.png" 
                            alt="Page finance" 
                            width={300} 
                            height={400} 
                            className="mx-auto"
                        />
                        <p className="md:mt-0 mt-8 w-70 mx-auto md:w-150" >
                           Gestion des réservations et suivi locataire simplifiés. Avec la solution Foncior, gardez un œil sur chaque location passée ou à venir grâce à notre calendrier interactif. Visualisez instantanément l&apos;impact de vos réservations sur votre budget et votre finance globale. Retrouvez en un clic l&apos;historique complet de vos états des lieux, vos revenus générés et les dossiers de vos anciens locataires. 
                        </p>
                    </div>
                </div>
                <div className="md:mt-15">
                    <h1 className="my-5 text-primary text-4xl mx-8 md:mx-0 ">
                        Patrimoine
                    </h1>
                    <div className="md:flex md:items-center md:justify-arround md:mt-10 ">
                        <Image 
                            src="/ComputerPatrimoineTable.png" 
                            alt="Page finance" 
                            width={300} 
                            height={400} 
                            className="mx-auto"
                        />
                        <p className="md:mt-0 mt-8 w-70 mx-auto md:w-150" >
                            Analysez votre rentabilité, bien par bien. Avec la solution Foncior, gardez une maîtrise totale de votre financeimmobilière. Visualisez instantanément l&apos;impact de chaque location sur votre budget global. Comparez vos coûts d&apos;exploitation au rendement réel de vos investissements pour prendre les meilleures décisions stratégiques et faire croître votre patrimoine.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}