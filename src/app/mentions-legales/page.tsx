import Link from "next/link";

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-gray-100">
        
        <div className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1b5346] mb-4">
            Mentions Légales
          </h1>
          <p className="text-gray-500 text-sm">
            En vigueur au {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-semibold text-[#1b5346] mb-3">
              1. Éditeur du site
            </h2>
            <p className="mb-3">
              Le site <strong>Foncior</strong> est édité par :
            </p>
            <ul className="list-none space-y-2 text-gray-600">
              <li><strong>Nom / Société :</strong> Axel Marie</li>
              <li><strong>Statut juridique :</strong> En cours de création</li>
              <li><strong>Capital social :</strong> En cours de création</li>
              <li><strong>Siège social :</strong> En cours de création</li>
              <li><strong>SIRET :</strong> En cours de création</li>
              <li><strong>RCS :</strong> Inscrit au Registre du Commerce et des Sociétés de Caen</li>
              <li><strong>Email :</strong> contact@foncior.fr</li>
              <li><strong>Directeur de la publication :</strong> Axel Marie</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1b5346] mb-3">
              2. Hébergement
            </h2>
            <p className="mb-3">
              Ce site est hébergé par :
            </p>
            <ul className="list-none space-y-2 text-gray-600">
              <li><strong>Nom de l&apos;hébergeur :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 440 N Barranca Avenue Covina, CA 91723 États-Unis</li>
              <li><strong>Contact / Téléphone :</strong> privacy@vercel.com </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1b5346] mb-3">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="mt-2">
              La reproduction de tout ou partie de ce site (y compris le logo Foncior et le design de l&apos;application) sur un support électronique ou papier quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1b5346] mb-3">
              4. Responsabilité
            </h2>
            <p>
              L&apos;éditeur s&apos;efforce de fournir sur le site Foncior des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p className="mt-2">
              Le site peut contenir des liens hypertextes vers d&apos;autres sites. L&apos;éditeur ne prend aucun engagement concernant tout autre site auquel vous pourriez avoir accès via le site Foncior et n&apos;est en aucune façon responsable du contenu, du fonctionnement et de l&apos;accès à ces sites.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>

      </div>
    </main>
  );
}