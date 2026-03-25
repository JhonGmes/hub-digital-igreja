import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm">church</span>
            </div>
            <span className="text-lg font-bold">Hub Digital</span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Nossa missão é aproximar a comunidade através da tecnologia, provendo um acesso simples e moderno à vida da igreja.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Navegação</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-zinc-600 hover:text-primary transition-colors">Início</Link></li>
            <li><Link to="/oferta" className="text-zinc-600 hover:text-primary transition-colors">Ofertas</Link></li>
            <li><Link to="/programacao" className="text-zinc-600 hover:text-primary transition-colors">Programação</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Contato</h4>
          <ul className="space-y-4 text-zinc-600 text-sm">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-zinc-400">location_on</span>
              Av. Central, 1000 - Centro
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-zinc-400">mail</span>
              contato@hubdigital.com.br
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Redes Sociais</h4>
          <div className="flex gap-4">
            {['facebook', 'instagram', 'youtube'].map(social => (
              <button key={social} className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:border-primary hover:text-primary transition-all">
                <span className="material-symbols-outlined">public</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-zinc-200 text-center">
        <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} Hub Digital da Igreja. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
