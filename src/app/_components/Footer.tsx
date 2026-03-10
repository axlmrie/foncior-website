import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (    
        <footer className="bg-[#006D5B] text-white py-12 px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-4">
                
                <div className="shrink-0">
                    <Image
                        src="/FonciorBlancOr.png"
                        alt="Logo de Foncior"
                        width={216}
                        height={76}
                        className="w-auto h-12 md:h-14 object-contain" 
                    />
                    <p>&copy; {new Date().getFullYear()} Foncior. Tous droits réservés.</p>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-6 text-[15px] font-semibold">
                    
                    <ul className="flex flex-col space-y-4">
                        <li><Link href="/about" className="hover:text-gray-300 transition-colors">A Propos</Link></li>
                        <li><Link href="/tarifs" className="hover:text-gray-300 transition-colors">Tarifs</Link></li>
                    </ul>

                    <ul className="flex flex-col space-y-4">
                        <li><Link href="/solution" className="hover:text-gray-300 transition-colors">Solution</Link></li>
                        <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
                    </ul>

                    <ul className="flex flex-col space-y-4">
                        <li><Link href="/mentions-legales" className="hover:text-gray-300 transition-colors">Mentions legales</Link></li>
                        <li><Link href="/politique-de-confidentialite" className="hover:text-gray-300 transition-colors">Politiques de confidentialité</Link></li>
                    </ul>

                </div>
            </div>
        </footer>
    );
}