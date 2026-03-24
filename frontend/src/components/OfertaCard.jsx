import { useNavigate } from 'react-router-dom';

const iconMap = {
  church: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 21V10l-6-6-6 6v11" />
      <path d="M9 21v-6h6v6" />
      <path d="M12 4V2" />
      <path d="M10 4h4" />
    </svg>
  ),
  construction: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M12 6v12" />
      <path d="M2 12h20" />
      <path d="M7 6l5-4 5 4" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  hands: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 11v-1a2 2 0 1 1 4 0v1" />
      <path d="M11 10v-1a2 2 0 1 1 4 0v1" />
      <path d="M15 11v-1a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8 8 8 0 0 1-8-8v-1a2 2 0 1 1 4 0" />
      <path d="M7 11v4" />
    </svg>
  ),
};

export default function OfertaCard({ oferta, index }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/pagamento/${oferta.id}`)}
      className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-gold/30 text-left w-full animate-slide-up overflow-hidden"
      style={{ animationDelay: `${index * 120}ms`, animationFillMode: 'both' }}
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-40 group-hover:h-40" />

      {/* Icon */}
      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center text-gold mb-5 group-hover:from-gold group-hover:to-gold-dark group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
        {iconMap[oferta.icone] || iconMap.church}
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-bold text-dark mb-2 group-hover:text-gold-dark transition-colors duration-300">
        {oferta.nome}
      </h3>
      <p className="relative text-dark/60 text-sm leading-relaxed">
        {oferta.descricao}
      </p>

      {/* Arrow */}
      <div className="relative mt-5 flex items-center gap-2 text-gold font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
        <span>Contribuir</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}
