import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProgramacao } from '../services/api';

const weeklyEvents = [
  { dia: 'Domingo', titulo: 'Missas - 7h, 10h, 18h', icone: '⛪' },
  { dia: 'Segunda', titulo: 'Terço Comunitário - 19h', icone: '📿' },
  { dia: 'Terça', titulo: 'Grupo de Oração - 19:30h', icone: '🙏' },
  { dia: 'Quarta', titulo: 'Catequese e Missa', icone: '📖' },
  { dia: 'Quinta', titulo: 'Adoração ao Santíssimo - 19h', icone: '✨' },
  { dia: 'Sexta', titulo: 'Via Sacra e Missa', icone: '✝️' },
  { dia: 'Sábado', titulo: 'Confissões e Missa - 16h, 18h', icone: '🕊️' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % weeklyEvents.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-soft/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/10 rounded-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {/* Cross icon */}
          <div className="animate-float mb-8 inline-block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-2xl animate-glow-pulse">
              <span className="text-white text-3xl">✝</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-4 animate-fade-in tracking-tight">
            Capela <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Nossa Senhora</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/60 font-light mb-12 animate-fade-in delay-200">
            Uma comunidade de fé e amor
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Link
              to="/oferta"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-gold-dark text-white font-semibold px-10 py-4 rounded-2xl shadow-lg hover:shadow-gold/30 hover:shadow-2xl transition-all duration-500 hover:scale-105 text-lg"
            >
              <span>🙏</span>
              <span>Fazer minha oferta</span>
              <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
            </Link>
            <Link
              to="/programacao"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white/80 font-semibold px-10 py-4 rounded-2xl hover:border-gold/50 hover:text-gold transition-all duration-500 hover:bg-gold/5 text-lg"
            >
              <span>📅</span>
              <span>Ver programação</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-3 rounded-full bg-gold animate-fade-in" />
          </div>
        </div>
      </section>

      {/* Events Carousel */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Esta Semana</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-2">
              Eventos da Semana
            </h2>
            <div className="mt-4 w-20 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full" />
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-soft to-white p-8 sm:p-12 shadow-lg">
            <div className="flex items-center justify-center min-h-[140px]">
              {weeklyEvents.map((event, index) => (
                <div
                  key={event.dia}
                  className={`absolute transition-all duration-500 text-center ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0 scale-100'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full scale-95'
                      : 'opacity-0 translate-x-full scale-95'
                  }`}
                >
                  <span className="text-5xl mb-4 block">{event.icone}</span>
                  <h3 className="text-2xl font-bold text-dark mb-2">{event.dia}</h3>
                  <p className="text-dark/60 text-lg">{event.titulo}</p>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {weeklyEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 h-2 bg-gold'
                      : 'w-2 h-2 bg-dark/20 hover:bg-gold/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { number: '7', label: 'Dias de atividade', icon: '📅' },
              { number: '15+', label: 'Eventos semanais', icon: '⛪' },
              { number: '500+', label: 'Membros ativos', icon: '👥' },
              { number: '10+', label: 'Anos de história', icon: '🕊️' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-warm-white hover:bg-blue-soft/50 transition-colors duration-300"
              >
                <span className="text-2xl block mb-2">{stat.icon}</span>
                <span className="text-3xl font-bold text-gold">{stat.number}</span>
                <p className="text-dark/50 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-dark to-dark-light py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-float inline-block mb-6">
            <span className="text-5xl">🙏</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sua contribuição faz a diferença
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Cada gesto de generosidade fortalece nossa comunidade e ajuda a construir um futuro de fé e esperança.
          </p>
          <Link
            to="/oferta"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-gold-dark text-white font-semibold px-10 py-4 rounded-2xl shadow-lg hover:shadow-gold/30 hover:shadow-2xl transition-all duration-500 hover:scale-105 text-lg"
          >
            <span>Contribuir agora</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
