export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-32 pb-16 bg-surface dark:bg-zinc-950 flex flex-col items-center text-center px-8 border-t border-surface-container">
      <div className="text-3xl font-serif italic text-zinc-800 dark:text-zinc-100 mb-8">
        Sacred Editorial
      </div>
      
      <div className="flex flex-wrap justify-center gap-12 mb-16">
        {['Privacidade', 'Termos', 'Contato', 'Estética'].map((item) => (
          <a
            key={item}
            href="#"
            className="font-label text-sm tracking-widest uppercase text-zinc-400 hover:text-primary underline-offset-8 hover:underline transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="w-full max-w-screen-xl border-t border-outline-variant/10 pt-16 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-label text-xs tracking-widest uppercase text-zinc-400">
          © {currentYear} Sacred Editorial Hub • ✨
        </div>
        
        <div className="flex gap-8">
          <span className="material-symbols-outlined text-outline hover:text-primary cursor-pointer transition-colors duration-300">
            brand_awareness
          </span>
          <span className="material-symbols-outlined text-outline hover:text-primary cursor-pointer transition-colors duration-300">
            nest_eco_leaf
          </span>
          <span className="material-symbols-outlined text-outline hover:text-primary cursor-pointer transition-colors duration-300">
            church
          </span>
        </div>
      </div>
    </footer>
  );
}
