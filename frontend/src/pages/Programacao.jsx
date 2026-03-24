import { useState, useEffect } from 'react';
import { getProgramacao } from '../services/api';
import EventCard from '../components/EventCard';

const dayIcons = {
  'Domingo': '☀️',
  'Segunda-feira': '🌙',
  'Terça-feira': '🙏',
  'Quarta-feira': '📖',
  'Quinta-feira': '✨',
  'Sexta-feira': '✝️',
  'Sábado': '🕊️',
};

export default function Programacao() {
  const [programacao, setProgramacao] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDay, setActiveDay] = useState(null);

  useEffect(() => {
    async function fetchProgramacao() {
      try {
        const data = await getProgramacao();
        setProgramacao(data);
        // Set active day to today's day
        const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        const today = days[new Date().getDay()];
        const todayData = data.find(d => d.dia === today);
        setActiveDay(todayData ? today : data[0]?.dia);
      } catch (err) {
        setError('Não foi possível carregar a programação.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProgramacao();
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-warm-white to-blue-soft/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
            <span className="text-3xl">📅</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">Programação</span> Semanal
          </h1>
          <p className="text-dark/50 text-lg max-w-lg mx-auto">
            Confira os horários e eventos da nossa comunidade
          </p>
          <div className="mt-6 w-20 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full" />
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin" />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-12 animate-fade-in">
            <span className="text-5xl block mb-4">⚠️</span>
            <p className="text-dark/60 text-lg">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-gold text-white rounded-xl hover:bg-gold-dark transition-colors"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {/* Schedule */}
        {!loading && !error && (
          <>
            {/* Day tabs */}
            <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide animate-fade-in">
              {programacao.map((dia) => (
                <button
                  key={dia.dia}
                  onClick={() => setActiveDay(dia.dia)}
                  className={`flex-shrink-0 px-5 py-3 rounded-2xl font-medium text-sm transition-all duration-300 ${
                    activeDay === dia.dia
                      ? 'bg-gradient-to-r from-gold to-gold-dark text-white shadow-lg shadow-gold/20'
                      : 'bg-white text-dark/50 hover:text-gold hover:bg-gold/5 shadow-sm'
                  }`}
                >
                  <span className="mr-2">{dayIcons[dia.dia] || '📌'}</span>
                  {dia.dia.split('-')[0]}
                </button>
              ))}
            </div>

            {/* Active Day Events */}
            {programacao
              .filter((dia) => dia.dia === activeDay)
              .map((dia) => (
                <div key={dia.dia} className="animate-fade-in">
                  <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                    {/* Day header */}
                    <div className="bg-gradient-to-r from-dark to-dark-light p-6">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{dayIcons[dia.dia] || '📌'}</span>
                        <div>
                          <h2 className="text-xl font-bold text-white">{dia.dia}</h2>
                          <p className="text-white/50 text-sm">{dia.eventos.length} evento(s)</p>
                        </div>
                      </div>
                    </div>

                    {/* Events list */}
                    <div className="p-4 divide-y divide-dark/5">
                      {dia.eventos.map((evento, idx) => (
                        <EventCard key={idx} evento={evento} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
