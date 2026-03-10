import Link from 'next/link'
import Image from "next/image";
export function Nav() {
  return (
    <nav className='px-8 py-4'>
      <ul className='flex space-x-4'>
        <li><Image src="/fonciorIcons.png"  alt="Logo de Foncior" width={216} height={150}/></li>
        <li><Link href="/about">A Propos</Link></li>
        <li><Link href="/tarifs">Tarifs</Link></li>
        <li><Link href="/solution">Solution</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li></li>
      </ul>
    </nav>
  )
}