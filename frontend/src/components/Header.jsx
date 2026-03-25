import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/oferta', label: 'Ofertas' },
    { path: '/programacao', label: 'Programação' },
    { path: '/configuracao', label: 'Admin' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-nav animate-fade-in shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-12 h-20 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg group-hover:bg-zinc-800 transition-colors">
            <span className="material-symbols-outlined">church</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900">Hub Digital</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-zinc-500 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all shadow-md active:scale-95">
            Área do Membro
          </button>
          
          {/* Mobile menu toggle */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-zinc-900"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 animate-fade-in p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-base font-semibold ${
                location.pathname === link.path ? 'text-primary' : 'text-zinc-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold">
            Área do Membro
          </button>
        </div>
      )}
    </header>
  );
}
