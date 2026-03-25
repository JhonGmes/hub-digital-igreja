import { Link } from 'react-router-dom';

export default function Configuracao() {
  const sidebarLinks = [
    { icon: 'dashboard', label: 'Dashboard' },
    { icon: 'auto_stories', label: 'Editor de Sermões' },
    { icon: 'event', label: 'Eventos' },
    { icon: 'payments', label: 'Doações' },
    { icon: 'analytics', label: 'Relatórios' },
    { icon: 'verified_user', label: 'Segurança', active: true },
  ];

  return (
    <div className="flex bg-surface min-h-screen pt-24 selection:bg-primary-fixed">
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-24 bottom-0 w-64 bg-surface-container-low border-r border-outline-variant/10 rounded-tr-[3rem] p-6 flex flex-col gap-4 animate-fade-in">
        <div className="flex flex-col gap-1 mb-6 px-4">
          <span className="font-serif text-lg text-primary">Administração</span>
          <span className="font-body text-xs font-medium tracking-wide text-zinc-500 uppercase">Portal do Santuário</span>
        </div>
        
        <div className="flex flex-col gap-2 flex-grow">
          {sidebarLinks.map((link) => (
            <button
              key={link.label}
              className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all ${
                link.active 
                  ? 'bg-white shadow-sm text-primary' 
                  : 'text-zinc-500 hover:bg-white/50'
              }`}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span className="font-body text-sm font-medium tracking-wide">{link.label}</span>
            </button>
          ))}
        </div>

        <button className="bg-gradient-to-r from-primary to-primary-container text-white rounded-full py-4 px-6 text-sm font-bold tracking-widest uppercase mb-6 shadow-lg shadow-primary/10 hover:opacity-90 transition-opacity">
          Novo Conteúdo
        </button>

        <div className="border-t border-outline-variant/10 pt-4 flex flex-col gap-2">
          <button className="flex items-center gap-3 text-zinc-500 px-4 py-2 hover:bg-white rounded-full transition-all">
            <span className="material-symbols-outlined">support_agent</span>
            <span className="text-sm">Suporte</span>
          </button>
          <Link to="/" className="flex items-center gap-3 text-zinc-500 px-4 py-2 hover:bg-white rounded-full transition-all">
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm">Sair</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 flex-grow p-12">
        <header className="flex justify-between items-center mb-16 animate-fade-in">
          <div>
            <h1 className="text-4xl font-serif tracking-tight text-on-surface mb-2 italic">Configurações do Hub</h1>
            <p className="text-zinc-500 font-medium font-body">Gerencie a identidade visual e operacional do seu santuário digital.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 rounded-full hover:bg-surface-container-low transition-colors text-zinc-600">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-12 w-12 rounded-full bg-primary-container/20 flex items-center justify-center overflow-hidden border border-primary-container/30">
              <img 
                alt="Avatar" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaQxXbhoinxgRzafLZ7bkTC3uChmc-n2ya5Q1ggojgkE7E3a9zT4-97LiKYEyWDA-6N0GQ-ULvLyIvs73kvylbg9uwbkbQX4IOHI-xWn00AqXYw3JojzxwFBOuV2E7FsY73-0DMbND5EjiWHMDfHFTfdbhVWHLbzAGRlf7LZkUnZ66IFdFXyMI_0-xSGmCqglB9wzgao1m1g3ySer6G_IJFk9nXEDoHb4pWYhBdp9kgVm_mf0iRB46gJWPXB8Lm8vSKz4wRMjTYluA" 
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-7 space-y-10 animate-slide-up">
            {/* 1. Identidade */}
            <section className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_12px_40px_rgba(25,28,29,0.04)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">church</span>
                </div>
                <h2 className="text-2xl font-serif text-on-surface italic">Identidade da Capela</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="relative group cursor-pointer">
                  <div className="w-32 h-32 rounded-xl overflow-hidden bg-surface-container-low border-2 border-dashed border-outline-variant/50 flex flex-col items-center justify-center gap-2 group-hover:border-primary transition-colors">
                    <img 
                      alt="Logo" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVBM2LHCC6aBtGMd2v15GWeYlrdkNk0feQJJQxr1JCkZ4ZykUs0ESAt2yB3DxFTiGat0ttbcXj62OB50eWDbQFlJ8G3_adDZhVwPjtb0SdQ5T1IhhURZIpd2VWMrJFBG4MlTWh3m2z_51RYrE8Xby_dlTno4JPT3_gopzRcnS_tMaNxNgCG-3NWToBwCBBURCtE3dl3YW7XcYkWbNIlf1C3bpNmJcNRs45KyaWKk-H8uJIfBL5Rzu4glkvi_iyD7Z4Z6M2iLZp-3PC" 
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="material-symbols-outlined text-white">photo_camera</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-center mt-3 text-zinc-400 font-bold uppercase tracking-widest">Alterar Logo</p>
                </div>
                <div className="flex-grow space-y-6 w-full">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Nome da Capela</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary-container transition-all text-on-surface font-medium outline-none" type="text" defaultValue="Santuário da Luz Eterna"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Slogan de Acolhida</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg px-5 py-4 focus:ring-2 focus:ring-primary-container transition-all text-on-surface font-medium outline-none" type="text" defaultValue="Um lugar de paz para o seu espírito"/>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Visual */}
            <section className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_12px_40px_rgba(25,28,29,0.04)]">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-tertiary-container/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">palette</span>
                  </div>
                  <h2 className="text-2xl font-serif text-on-surface italic">Banners e Visual</h2>
                </div>
                <button className="text-primary font-bold text-[10px] uppercase tracking-widest hover:underline">Ver Todos</button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="group relative aspect-video rounded-lg overflow-hidden border border-outline-variant/20 cursor-pointer shadow-sm">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5WGlBffr9pVdzKOUqXFSXdKmwDw0Tx5wlwcYLC_EwmF67liZuc1rL7rbna9NTyq-1uo0f_URw_NKYlhxD-dW_W35DxyK4c5lCv-hwAKMNqKCf-Jm1q3Bycenabvb6Tz7ZxpbpDVKJ1daFKMTUBDWnOq4dE-xZ5Ki1CC37W5DhK4cE7lTa_kCF9uUTKYR90_T-tT9Qmgihpqlg4CHRTCRI-JepDjAZJnapS02fPWPvmnx6F5YF0Ct6FR1vgGTc8ICbQs9dBKTmHZ4i" alt="Banner" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Home Principal</span>
                  </div>
                </div>
                <div className="group relative aspect-video rounded-lg overflow-hidden border border-outline-variant/20 cursor-pointer shadow-sm">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc9AnRcyb_Lk8nCZXWAv2lFGeDKJ1H-fbGgeUqR3WPX1kS1Pzio7NdpXUaLbAee9MQUUMzQI0MdixeYpMLGIrgiwoOCAeDL_PgOtGeMtAsZmCHmIPK1_o1bym6zUIZ-pSqy2FFA7T7EFs3Od0NwQSFfm9tjtPEdQO24DTSHhPbDTCODtEEhZX5t-72gVRc4oFGcidPtHPyUdu68yhD5VC1qFqxv8WfCjWv8DOzh-NhBEF_BEi2RX3PpseNdNGZHaUg8UIJ5T_2ugZX" alt="Banner" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Página de Eventos</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 flex items-center justify-center gap-3 py-4 border-2 border-dashed border-outline-variant/30 rounded-lg text-zinc-400 hover:border-primary hover:text-primary transition-all group">
                <span className="material-symbols-outlined">add_circle</span>
                <span className="text-xs font-bold uppercase tracking-widest">Adicionar Novo Banner</span>
              </button>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-5 space-y-10 animate-slide-up delay-200">
            {/* Financial Area */}
            <section className="bg-primary text-white p-10 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h2 className="text-2xl font-serif mb-1 italic">Últimas Ofertas</h2>
                    <p className="text-white/60 text-xs uppercase tracking-widest">Relatório PIX em tempo real</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-full">
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                  </div>
                </div>
                <div className="space-y-6">
                  {['R$ 150,00', 'R$ 50,00', 'R$ 2.450,00'].map((val, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <p className="font-bold text-lg">{val}</p>
                        <p className="text-[10px] text-white/50 uppercase tracking-widest">Hoje • Maria Silva</p>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20">Confirmado</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-zinc-100 transition-colors shadow-lg">
                  Exportar Relatório Mensal
                </button>
              </div>
            </section>

            {/* Quick Actions */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-secondary-container to-primary-container text-on-primary-container flex flex-col gap-4 shadow-sm">
              <span className="material-symbols-outlined text-3xl">help_center</span>
              <h3 className="font-serif text-xl italic">Precisa de Ajuda?</h3>
              <p className="text-sm opacity-80 leading-relaxed font-body">Nossa equipe de suporte está disponível para auxiliar com as configurações do seu Hub.</p>
              <button className="inline-block font-bold text-[10px] uppercase tracking-widest hover:underline text-left">Falar com Consultor</button>
            </div>
          </div>
        </div>

        {/* Floating Save Button */}
        <div className="fixed bottom-12 right-12 flex items-center gap-6 bg-white/90 backdrop-blur-xl border border-primary/20 p-2 pl-8 rounded-full shadow-2xl z-50 animate-fade-in">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Alterações não salvas</span>
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary-container transition-all shadow-xl shadow-primary/20 active:scale-95">
            Salvar Painel
          </button>
        </div>
      </main>
    </div>
  );
}
