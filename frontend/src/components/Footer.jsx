export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-white text-lg">✝</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Hub Digital</h3>
                <p className="text-gold text-xs font-medium -mt-0.5">da Igreja</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Uma comunidade de fé e amor, conectando fiéis através da tecnologia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gold transition-colors duration-300">Início</a></li>
              <li><a href="/oferta" className="hover:text-gold transition-colors duration-300">Fazer Oferta</a></li>
              <li><a href="/programacao" className="hover:text-gold transition-colors duration-300">Programação</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📍</span> Rua da Igreja, 123 — Centro
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> (11) 1234-5678
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> contato@igreja.com.br
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-xs">
          <p>&copy; {currentYear} Hub Digital da Igreja. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
