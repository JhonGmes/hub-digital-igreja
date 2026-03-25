import { useState, useEffect } from 'react';
import { getProgramacao } from '../services/api';

export default function Programacao() {
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(true);

  // Map images for each day as per Stitch design
  const dayImages = {
    'Segunda-feira': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBryZsHZTnlGYutShpJO2cWZIZb1eP9kavrMVa-4zBiczybcDZpU1a52O_DwpV_0ik7wHt6lgwWBu8_rdBUsJpu-AcEfv5YXv-czlDYOCcBV9R93wzc1QUteYR8kQlwMeDUrdWsgBV4ry_mm-Sy_8R4S6pJ2U_vVumMmwk2g3p7slQHA-4i2K51lxJpFjtYW-OVoSab2k2k2YnTEu-1_L_MX0LCfHFobj2e_4BjXT_XaU0ilbTZ0-pXHpEHw9175SLK8s1u0_BUPOuq',
    'Quarta-feira': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf-jePpwqNHRvtk224NsLCBqKQXnruKI50QOPPqXN9FmjEf8QD6WZ6QOqpd1YU2Y9_oAlgfEX8tVWX5nIa8z3Tg8eYK5PfxCUHkP-YcjoNfcmRmQOddqnaCIovrH40WAvZjZlWszs68nF-0wsHtXp_cbnGirJKbPgo8i_vPyRXnYrPxSin90tnRLoVQoLGvyL6P44si-_IcCrRUMUmohT5ZKzzqoSVOLhRvu1d8YfPMWM1Y4O-F3hCDOHFbqdB7RLt-YnkwCWUCwOl',
    'Sexta-feira': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi-5WiVt2CrIY8NLNs1GFMh_yXxjCUYa8Ql16r9I3EfaS96aDaAjvwSW7crsB_ZLwiWu1NpS_ODKCOxKMIC5Lt8uLtaYgT29ZIMCS8aOx3BANuCmmOKHHvyEtZstcMvIzPqa48LXpJ97xvYHUnkiS8mIHcYvMrndU0XYV0-6uKhnz-NB_YXLTX_PVnYmaYzn4SueALHtPvIuxu58nZcStmPbo7UXykPBTbzYIbc6fM17-wCm8EFs8Y3mvmy6I8emObbGl_fPThTyTH',
    'default': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE...default' // Fallback
  };

  const dayTitles = {
    'Segunda-feira': 'Dia de Iniciação',
    'Quarta-feira': 'Dia de Profundidade',
    'Sexta-feira': 'Dia de Colheita',
    'Domingo': 'O Grande Ritual'
  };

  useEffect(() => {
    getProgramacao().then(data => {
      setSchedule(data);
      setLoading(false);
    });
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="w-12 h-12 border-4 border-primary-container border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-surface selection:bg-primary-container/30">
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-24 text-center animate-fade-in">
          <span className="font-label text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Rituais & Encontros</span>
          <h1 className="font-headline text-5xl md:text-7xl font-light text-on-surface tracking-tight mb-6">Programação Semanal</h1>
          <p className="font-body text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            Uma sequência curada de práticas contemplativas desenhadas para alinhar seu ritmo interno com as estações do Sacred Editorial.
          </p>
        </header>

        {/* Schedule List */}
        <div className="space-y-32">
          {Object.entries(schedule).map(([day, events]) => (
            <section key={day} className="group animate-slide-up">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-full md:w-1/4 md:sticky md:top-40">
                  <h2 className="font-headline text-4xl italic text-on-surface mb-2">{day}</h2>
                  <p className="font-label text-sm tracking-widest uppercase text-outline">
                    {dayTitles[day] || 'Momento de Fé'}
                  </p>
                  
                  {dayImages[day] && (
                    <div className="mt-8 overflow-hidden rounded-xl aspect-[4/5] bg-surface-container-low hidden md:block">
                      <img 
                        src={dayImages[day]} 
                        alt={day}
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                  )}
                </div>

                <div className="w-full md:w-3/4 space-y-6">
                  {events.map((event, idx) => (
                    <div 
                      key={idx}
                      className={`p-8 md:p-10 rounded-2xl transition-all duration-500 flex flex-col md:flex-row justify-between items-center gap-8 ${
                        idx === 0 
                          ? 'bg-surface-container-lowest border-l-4 border-primary-container/20 hover:bg-white shadow-sm' 
                          : 'bg-surface-container-low hover:bg-surface-container-lowest transition-colors'
                      }`}
                    >
                      <div className="flex-1 space-y-3 text-center md:text-left">
                        <span className={`font-label text-xs font-bold tracking-widest ${idx === 0 ? 'text-primary-container' : 'text-secondary'}`}>
                          {event.horario}
                        </span>
                        <h3 className="font-headline text-2xl text-on-surface">{event.evento}</h3>
                        <p className="text-secondary font-light">
                          Prática contemplativa dedicada ao {event.evento.toLowerCase()} e conexão comunitária.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4 pt-4 text-xs text-outline uppercase tracking-widest">
                          <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">location_on</span> 
                            {event.local || 'Salão Principal'}
                          </span>
                          <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                          <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">group</span> 
                            Comunitário
                          </span>
                        </div>
                      </div>
                      
                      <button className={`px-8 py-3 rounded-full font-label text-sm tracking-widest uppercase transition-all active:scale-95 duration-200 ${
                        idx === 0 
                          ? 'bg-gradient-to-tr from-primary to-primary-container text-white shadow-lg shadow-primary/10' 
                          : 'border border-outline-variant text-on-surface-variant hover:bg-surface-container-high'
                      }`}>
                        Agendar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
