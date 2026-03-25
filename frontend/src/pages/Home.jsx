import { Link } from 'react-router-dom';

export default function Home() {
  const featuredEvents = [
    {
      title: 'Vigília da Luz',
      description: 'Um momento de introspecção e oração sob a luz das velas.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc9AnRcyb_Lk8nCZXWAv2lFGeDKJ1H-fbGgeUqR3WPX1kS1Pzio7NdpXUaLbAee9MQUUMzQI0MdixeYpMLGIrgiwoOCAeDL_PgOtGeMtAsZmCHmIPK1_o1bym6zUIZ-pSqy2FFA7T7EFs3Od0NwQSFfm9tjtPEdQO24DTSHhPbDTCODtEEhZX5t-72gVRc4oFGcidPtHPyUdu68yhD5VC1qFqxv8WfCjWv8DOzh-NhBEF_BEi2RX3PpseNdNGZHaUg8UIJ5T_2ugZX',
    },
    {
      title: 'Círculo de Estudos',
      description: 'Encontros semanais para aprofundamento da nossa fé.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBryZsHZTnlGYutShpJO2cWZIZb1eP9kavrMVa-4zBiczybcDZpU1a52O_DwpV_0ik7wHt6lgwWBu8_rdBUsJpu-AcEfv5YXv-czlDYOCcBV9R93wzc1QUteYR8kQlwMeDUrdWsgBV4ry_mm-Sy_8R4S6pJ2U_vVumMmwk2g3p7slQHA-4i2K51lxJpFjtYW-OVoSab2k2k2YnTEu-1_L_MX0LCfHFobj2e_4BjXT_XaU0ilbTZ0-pXHpEHw9175SLK8s1u0_BUPOuq',
    },
    {
      title: 'Impacto Social',
      description: 'Conheça nossos projetos de apoio à comunidade local.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi-5WiVt2CrIY8NLNs1GFMh_yXxjCUYa8Ql16r9I3EfaS96aDaAjvwSW7crsB_ZLwiWu1NpS_ODKCOxKMIC5Lt8uLtaYgT29ZIMCS8aOx3BANuCmmOKHHvyEtZstcMvIzPqa48LXpJ97xvYHUnkiS8mIHcYvMrndU0XYV0-6uKhnz-NB_YXLTX_PVnYmaYzn4SueALHtPvIuxu58nZcStmPbo7UXykPBTbzYIbc6fM17-wCm8EFs8Y3mvmy6I8emObbGl_fPThTyTH',
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-stone-50 z-0">
          <div className="absolute right-0 top-0 w-2/3 h-full bg-zinc-100/50 clip-path-hero hidden lg:block"></div>
        </div>
        
        <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">
              Bem-vindo ao Hub Digital
            </span>
            <h1 className="text-5xl md:text-7xl leading-tight">
              A presença da <span className="text-primary italic">fé</span> em cada detalhe digital.
            </h1>
            <p className="text-xl text-zinc-500 leading-relaxed max-w-lg">
              Um espaço dedicado à oração, comunidade e apoio mútuo. Acesse nossas informações, eventos e realize suas ofertas com praticidade.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/oferta" className="button-primary">
                Fazer minha oferta
                <span className="material-symbols-outlined">favorite</span>
              </Link>
              <Link to="/programacao" className="button-secondary">
                Ver programação
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in hidden lg:block">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5WGlBffr9pVdzKOUqXFSXdKmwDw0Tx5wlwcYLC_EwmF67liZuc1rL7rbna9NTyq-1uo0f_URw_NKYlhxD-dW_W35DxyK4c5lCv-hwAKMNqKCf-Jm1q3Bycenabvb6Tz7ZxpbpDVKJ1daFKMTUBDWnOq4dE-xZ5Ki1CC37W5DhK4cE7lTa_kCF9uUTKYR90_T-tT9Qmgihpqlg4CHRTCRI-JepDjAZJnapS02fPWPvmnx6F5YF0Ct6FR1vgGTc8ICbQs9dBKTmHZ4i" 
                alt="Interior da Igreja"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS SECTION */}
      <section className="bg-zinc-50 overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl text-zinc-900">Nossa Programação</h2>
              <p className="text-zinc-500 max-w-md">
                Participe dos nossos encontros semanais e fortaleça sua conexão espiritual.
              </p>
            </div>
            <Link to="/programacao" className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
              Ver programação completa
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.map((event, i) => (
              <div key={i} className="card-professional group">
                <div className="rounded-lg overflow-hidden aspect-video mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl mb-3">{event.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>
                <div className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / MISSION SECTION */}
      <section className="bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl rotate-3"></div>
              <div className="card-professional relative bg-white flex flex-col items-center gap-8 py-16">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-4xl">volunteer_activism</span>
                </div>
                <div className="text-center space-y-2">
                  <h4 className="text-4xl">1k+</h4>
                  <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Vidas Impactadas</p>
                </div>
                <p className="text-zinc-500 italic max-w-xs text-center">
                  "O amor é a força que transforma o mundo e aproxima os corações."
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <span className="font-bold text-xs tracking-widest uppercase text-zinc-400">Nossa Missão</span>
              <h2 className="text-4xl md:text-5xl">Unindo a tradição da fé com a agilidade do digital.</h2>
              <p className="text-lg text-zinc-500 leading-relaxed">
                Nossa comunidade busca ser um farol de luz no mundo moderno. Através deste hub, facilitamos o acesso às orações, doações e à vida eclesial, garantindo que você nunca esteja longe da sua casa espiritual.
              </p>
              <ul className="space-y-4 pt-4">
                {['Transparência nas doações', 'Acesso fácil à programação', 'Comunicação direta com a paróquia'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-zinc-700 font-medium">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="bg-zinc-900 py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 blur-3xl bg-primary transform -translate-y-1/2"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-10">
          <h2 className="text-4xl md:text-6xl text-white">Pronto para ser parte da nossa jornada?</h2>
          <p className="text-zinc-400 text-lg">
            Sua presença e contribuição são o que tornam nossa comunidade mais forte a cada dia.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/oferta" className="button-primary bg-white text-zinc-900 border-none px-12 py-4">
              Realizar Oferta
            </Link>
            <Link to="/configuracao" className="text-white font-bold flex items-center gap-2 hover:opacity-80 transition-all">
              Acessar Painel
              <span className="material-symbols-outlined">login</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
