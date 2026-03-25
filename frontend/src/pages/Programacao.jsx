import { useState, useEffect } from 'react';
import { getProgramacao } from '../services/api';

export default function Programacao() {
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeDay, setActiveDay] = useState('Domingo');

  useEffect(() => {
    getProgramacao().then(data => {
      const grouped = data.reduce((acc, curr) => {
        acc[curr.dia] = curr.eventos;
        return acc;
      }, {});
      setSchedule(grouped);
      setLoading(false);
    });
  }, []);

  const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  if (loading) return (
    <div className="pt-32 min-h-screen animate-pulse flex items-center justify-center">
      <div className="text-zinc-300 font-bold uppercase tracking-widest">Carregando Agenda...</div>
    </div>
  );

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <span className="font-bold text-xs tracking-widest uppercase text-primary">Agenda da Semana</span>
          <h1 className="text-4xl md:text-5xl">Programação Completa</h1>
          <p className="text-zinc-500 italic max-w-lg mx-auto">
            "Para tudo há um tempo, e um tempo para cada propósito debaixo do céu."
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeDay === day 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-zinc-100 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600'
              }`}
            >
              {day.split('-')[0]}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="max-w-4xl mx-auto space-y-6 animate-slide-up">
          {schedule[activeDay]?.length > 0 ? (
            schedule[activeDay].map((event, idx) => (
              <div key={idx} className="card-professional flex flex-col md:flex-row items-start md:items-center gap-8 py-10 px-10">
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="text-3xl font-bold text-primary">{event.horario}</div>
                  <div className="text-[10px] uppercase font-black text-zinc-300 tracking-tighter">Horário Local</div>
                </div>
                
                <div className="flex-grow space-y-2">
                  <h3 className="text-2xl text-zinc-900">{event.titulo}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    {event.descricao || 'Participe deste momento especial em nossa comunidade.'}
                  </p>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-auto">
                  <button className="w-full button-secondary py-2 px-6 text-xs uppercase tracking-widest">
                    Detalhes
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-zinc-50 rounded-2xl border-2 border-dashed border-zinc-200">
              <span className="material-symbols-outlined text-4xl text-zinc-300 mb-4">event_busy</span>
              <p className="text-zinc-400">Nenhum evento programado para este dia.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
