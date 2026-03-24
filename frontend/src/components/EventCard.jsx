export default function EventCard({ evento }) {
  return (
    <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gold/5 transition-all duration-300">
      {/* Time badge */}
      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 flex flex-col items-center justify-center group-hover:from-gold group-hover:to-gold-dark group-hover:text-white transition-all duration-500">
        <span className="text-xs font-bold text-gold group-hover:text-white transition-colors">
          {evento.horario}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-dark font-semibold text-base group-hover:text-gold-dark transition-colors duration-300">
          {evento.titulo}
        </h4>
        <p className="text-dark/50 text-sm mt-0.5">
          {evento.descricao}
        </p>
      </div>
    </div>
  );
}
