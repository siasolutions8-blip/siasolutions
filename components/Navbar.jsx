import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      {/* ...existing code... */}
      <ul>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/servicios">Servicios</Link></li>
        <li><Link href="/proyectos">Proyectos</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
        {/* Agrega más enlaces según sea necesario */}
      </ul>
      {/* ...existing code... */}
    </nav>
  );
}
