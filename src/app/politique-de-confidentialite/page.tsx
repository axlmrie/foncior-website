import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-gray-100">
        
        <div className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1b5346] mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-gray-500 text-sm">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-semibold text-[#1b5346] mb-3">
              1. Identité du responsable de traitement
            </h2>
            <p>
              Le responsable du traitement des données collectées sur le site Foncior est <strong>Axel Marie</strong>. Pour toute question relative à la protection de vos données, vous pouvez nous contacter à l'adresse suivante : <strong>contact@foncior.fr</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1b5346] mb-3">
              2. Quelles données collectons-nous et pourquoi ?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900">A. Formulaire de contact</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li><strong>Données collectées :</strong> Adresse e-mail et contenu du message.</li>
                  <li><strong>Finalité :</strong> Ces données servent uniquement à vous répondre. Elles ne sont stockées dans aucune base de données, mais uniquement conservées dans notre boîte mail professionnelle le temps de traiter votre demande.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">B. Inscription à la liste d'attente (Bêta-test)</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li><strong>Données collectées :</strong> Nom, Prénom, Adresse e-mail.</li>
                  <li><strong>Finalité :</strong> Ces données sont récoltées avec votre consentement explicite lors de la soumission du formulaire. Elles servent exclusivement à vous recontacter pour vous informer de l'ouverture de notre bêta-test.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">C. Statistiques de fréquentation</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li><strong>Données collectées :</strong> Données de navigation anonymisées (via des cookies de type Google Analytics).</li>
                  <li><strong>Finalité :</strong> Mesurer l'audience de notre site vitrine et comprendre comment les utilisateurs interagissent avec celui-ci afin de l'améliorer continuellement.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1b5346] mb-3">
              3. Où sont stockées vos données et pour combien de temps ?
            </h2>
            <p className="mb-2">
              Les données liées à l'inscription à notre bêta-test sont stockées de manière sécurisée sur des serveurs situés en <strong>France</strong>, hébergés par <strong>Vercel </strong>.
            </p>
            <p>
              Vos données de contact et d'inscription à la bêta sont conservées pendant une durée maximale de 3 ans à compter de notre dernier contact, ou jusqu'à ce que vous demandiez leur suppression.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1b5346] mb-3">
              4. Partage des données
            </h2>
            <p>
              Nous ne vendons, ne louons, ni ne partageons vos données personnelles à des tiers à des fins commerciales. Les seules données partagées sont les données de navigation anonymisées transmises à notre outil d'analyse (Google Analytics) pour nos statistiques internes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1b5346] mb-3">
              5. Vos droits
            </h2>
            <p className="mb-4">
              Conformément à la réglementation européenne (RGPD), vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression de vos données.
            </p>
            <p>
              Pour exercer ces droits, il vous suffit de nous envoyer un e-mail à : <strong>contact@foncior.fr</strong>. Nous traiterons votre demande dans les plus brefs délais.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>

      </div>
    </main>
  );
}