import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'ENSAIOS' },
    { path: '/oferta', label: 'OFERTAS' },
    { path: '/programacao', label: 'MEDITAÇÕES' }, // Mapping 'Programação' to 'Meditações' as per Stitch UI
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-nav shadow-[0_20px_40px_rgba(77,70,53,0.05)]">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif italic text-zinc-900 dark:text-zinc-50 tracking-wide">
          Sacred Editorial
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-label text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-zinc-500 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side Actions */}
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-zinc-600 hover:text-primary transition-colors">
            language
          </button>
          
          {/* Mobile menu toggle */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden material-symbols-outlined text-zinc-900"
          >
            {menuOpen ? 'close' : 'menu'}
          </button>
          
          <button className="hidden sm:block bg-primary hover:bg-primary-container text-white px-8 py-2.5 rounded-full font-label text-xs tracking-[0.2em] uppercase transition-all duration-300 active:scale-95 shadow-lg shadow-primary/10">
            Membro
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-surface-container animate-fade-in">
          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`font-label text-sm tracking-[0.2em] uppercase ${
                  location.pathname === link.path ? 'text-primary font-bold' : 'text-zinc-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-primary text-white w-full py-4 rounded-full font-label text-xs tracking-[0.2em] uppercase">
              Membro
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
