import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero Section */}
      <section className="relative h-[870px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Interior de catedral" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Ud01TJ2N7o-elR1hkzyIs_VuIF6ZWQ7ynt9u52rTk7z_l8N8uNMDNsWNrp-b3VZ5fzccwgQGkm3PvBzMqkHNlvnrFUjng28Sg78P-RI3qVHt1pMjGqs3dpX68T4GjwOYUn2Lyt1bv-1pwcT8FSgD4ILr8V-b5hosh3X_U-F8cwmKVDrQsu40RZn-4SDAmCVuSvKaant0BL5OJ1en8QH6Z0mG7Snh5lYe1kU_rAIo2pjTypeOXgxSQ_WC70HqO0AJ-VXIwXLdQyut" 
          />
          <div className="absolute inset-0 bg-zinc-900/40 backdrop-brightness-75"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-8 animate-fade-in">
          <span className="font-label text-primary-fixed uppercase tracking-[0.4em] mb-6 block hero-glow text-primary-container">
            Bem-vindo à Experiência
          </span>
          <h1 className="font-headline text-6xl md:text-8xl text-white italic tracking-tight leading-tight mb-8 hero-glow">
            A beleza do sagrado em cada detalhe.
          </h1>
          <p className="font-body text-xl text-zinc-100/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Um espaço digital dedicado à contemplação, ao estudo e à conexão profunda com o divino e o comunitário.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link 
              to="/oferta" 
              className="bg-primary-container text-on-primary-container px-10 py-5 rounded-full font-label font-bold text-sm tracking-[0.2em] uppercase shadow-xl hover:shadow-primary-container/20 transition-all duration-500 active:scale-95"
            >
              Fazer minha oferta
            </Link>
            <Link 
              to="/programacao" 
              className="text-white border border-white/30 backdrop-blur-md px-10 py-5 rounded-full font-label text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-zinc-900 transition-all duration-500"
            >
              Conhecer o Santuário
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-surface overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-12 text-center animate-slide-up">
          <div className="inline-block mb-12">
            <span className="material-symbols-outlined text-4xl text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
              format_quote
            </span>
          </div>
          <h2 className="font-headline text-3xl md:text-5xl italic text-on-surface leading-snug max-w-5xl mx-auto mb-8">
            "A alma não respira através de palavras articuladas, mas através do silêncio que precede a oração profunda."
          </h2>
          <p className="font-label text-outline tracking-widest uppercase text-sm">— Sto. Agostinho</p>
        </div>
      </section>

      {/* Bento Grid Sections */}
      <section className="pb-32 px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Event Card */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-12 flex flex-col justify-end min-h-[500px] shadow-sm animate-fade-in">
            <div className="absolute inset-0 z-0">
              <img 
                alt="Vela acesa" 
                className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA76fJ1TTr6OhZEmtQXQwvrDR7XmC1PMPt_1Msa5pGiPzp40pLsXfLp7WSSqr2IbNahogEvIZQtFtpEDngkEsCNrvGkOUNqHVmTMSNvqdHAxM_3q7Ql3Ac7hpFkaOOn2CJZBvtaqmbswt5-zXdBrCynE-KlHDssVPZ3xL7n7xMFTo0XVrGmNar2QGb-sKNIpI6Z8dQxVPt7JTaJmDI1c2pCaqyXW_HnCWAJckATzWpe03kgFIpNwYg69EAO9fWl-JWeWUGg0-GfEvm1" 
              />
            </div>
            <div className="relative z-10">
              <span className="text-primary-container font-label tracking-widest uppercase text-xs mb-4 block">Próximo Encontro</span>
              <h3 className="font-headline text-4xl italic text-on-background mb-6">Vigília da Luz & Meditação</h3>
              <p className="font-body text-on-surface-variant max-w-md mb-8">Junte-se a nós para uma noite de silêncio e reflexão coletiva sob a luz suave das velas.</p>
              <Link to="/programacao" className="inline-flex items-center gap-3 text-on-background font-label text-sm uppercase tracking-widest border-b border-primary-container pb-1 group-hover:gap-5 transition-all">
                Ver detalhes <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Small Info Card */}
          <div className="md:col-span-4 rounded-xl bg-surface-container-lowest border border-outline-variant/10 p-12 flex flex-col shadow-sm animate-fade-in delay-100">
            <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-3xl">auto_stories</span>
            </div>
            <h3 className="font-headline text-2xl italic mb-4">Círculo de Estudos</h3>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-8">Explorando os clássicos da espiritualidade ocidental e oriental em encontros semanais presenciais e online.</p>
            <button className="mt-auto text-primary font-label text-xs uppercase tracking-widest hover:underline underline-offset-8 transition-all">Inscrever-se</button>
          </div>

          {/* Grid Bottom Row */}
          <div className="md:col-span-4 rounded-xl bg-surface-container-low p-12 flex flex-col shadow-sm border border-transparent hover:border-outline-variant transition-colors duration-500 animate-fade-in delay-200">
            <span className="material-symbols-outlined text-primary-container mb-6">volunteer_activism</span>
            <h3 className="font-headline text-2xl italic mb-4">Voluntariado</h3>
            <p className="font-body text-on-surface-variant text-sm mb-6">Transforme sua fé em ação através de nossos programas de apoio comunitário e justiça social.</p>
            <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-surface"></div>
                <div className="w-8 h-8 rounded-full bg-zinc-400 border-2 border-surface"></div>
                <div className="w-8 h-8 rounded-full bg-zinc-500 border-2 border-surface"></div>
              </div>
              <span className="text-xs font-label text-outline">+120 ativos</span>
            </div>
          </div>

          <div className="md:col-span-8 rounded-xl bg-surface-container-low p-12 flex flex-col md:flex-row items-center gap-12 shadow-sm animate-fade-in delay-300">
            <div className="flex-1">
              <h3 className="font-headline text-3xl italic mb-4 text-on-background">Impacto Social</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Nossas iniciativas no último ano alcançaram mais de 5.000 famílias em situação de vulnerabilidade, provendo não apenas alimento, mas dignidade e escuta.</p>
            </div>
            <div className="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden">
              <img 
                alt="Comunidade" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEYhg8FutGTNpM4FMPS6a68NYaNJlhylYO5qcYg6QbMnQl4TkqjTRlDtXxGLe0ed8QjDlgoyD1E6VRrlDtrmuuuarfT-SToaBcNHVm3pXAPDs2Fr3MNz1_E3EmqsEas2x1OSIL5WxeZwjc61eBX9nIt60bD8XfI6AizvfoQa2rAwRJr3N6YUNKhHzvFAu6-tsfd9ax2mhwt1zzLYJbRouhkcu6bik5wdZq8b9P4Pv89t-U5Lok82PfdmuRZzDk9_OUiETyhivA9ufW" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic CTA Section */}
      <section className="py-32 bg-surface-container">
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="bg-surface-container-lowest rounded-xl p-16 md:p-24 flex flex-col items-center text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent"></div>
            <h2 className="font-headline text-4xl md:text-6xl italic mb-8 max-w-3xl">Torne-se parte do círculo de mantenedores.</h2>
            <p className="font-body text-on-surface-variant text-lg max-w-xl mb-12">Sua contribuição sustenta nossas obras sociais, a manutenção de nosso espaço e a produção de conteúdo exclusivo para membros.</p>
            <Link 
              to="/oferta"
              className="bg-primary text-white px-12 py-5 rounded-full font-label text-sm uppercase tracking-[0.3em] hover:bg-primary-container transition-all shadow-lg active:scale-95"
            >
              Filiar-se agora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
