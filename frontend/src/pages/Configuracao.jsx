import { useState } from 'react';

export default function Configuracao() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'sermoes', label: 'Sermões', icon: 'auto_stories' },
    { id: 'eventos', label: 'Eventos', icon: 'event' },
    { id: 'doacoes', label: 'Doações', icon: 'payments' },
    { id: 'relatorios', label: 'Relatórios', icon: 'analytics' },
    { id: 'seguranca', label: 'Segurança', icon: 'verified_user' },
  ];

  return (
    <div className="flex min-h-screen bg-zinc-50 pt-20">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-zinc-200 hidden lg:flex flex-col fixed h-full z-10">
        <div className="p-8">
          <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Painel Administrativo</h2>
        </div>
        
        <nav className="flex-grow px-4 space-y-2">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-sm font-bold transition-all ${
                activeTab === item.id 
                  ? 'bg-zinc-900 text-white shadow-lg shadow-zinc-200' 
                  : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-zinc-100 space-y-4">
          <button className="w-full button-primary bg-primary text-xs py-3 rounded-lg">
            Novo Conteúdo
          </button>
          <div className="flex items-center gap-3 px-2 text-zinc-400">
            <span className="material-symbols-outlined text-sm">support_agent</span>
            <span className="text-[10px] uppercase font-bold tracking-widest">Suporte Central</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow lg:ml-72 p-8 md:p-12 animate-fade-in">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl text-zinc-900">Configurações do Hub</h1>
            <p className="text-zinc-400 text-sm">Gerencie a identidade visual e operacional do seu santuário digital.</p>
          </div>
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-zinc-400 hover:text-primary transition-colors">notifications</button>
            <div className="w-10 h-10 rounded-full bg-primary overflow-hidden border-2 border-white shadow-md">
              <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Visual Identity Section */}
          <section className="card-professional bg-white space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">church</span>
              </div>
              <h2 className="text-xl">Identidade da Capela</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-zinc-50 rounded-xl border border-zinc-100">
                <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center text-white text-3xl font-serif">
                  J
                </div>
                <div className="space-y-2">
                  <button className="bg-white border border-zinc-200 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg hover:border-primary transition-colors">Alterar Logo</button>
                  <p className="text-[10px] text-zinc-400">PNG ou SVG, máx. 2MB</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Slogan de Acolhida</label>
                <input 
                  type="text" 
                  placeholder="Um lugar de paz para o seu espírito"
                  className="w-full bg-zinc-50 border border-zinc-200 p-4 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <button className="w-full button-primary bg-primary py-4 text-sm rounded-xl">Salvar Alterações</button>
            </div>
          </section>

          {/* Activity Section */}
          <section className="space-y-8">
            <div className="card-professional bg-zinc-900 text-white space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl">Últimas Ofertas</h3>
                <span className="material-symbols-outlined text-zinc-500">account_balance_wallet</span>
              </div>
              <div className="space-y-4">
                {[150, 50, 2450].map((val, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <div>
                      <div className="text-lg font-bold">R$ {val.toFixed(2)}</div>
                      <div className="text-[10px] text-zinc-500 uppercase font-bold">Hoje • Maria Silva</div>
                    </div>
                    <span className="text-[10px] bg-primary/20 text-primary px-3 py-1 rounded-full font-bold">Confirmado</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-white text-zinc-900 font-bold py-4 rounded-xl text-sm hover:bg-zinc-100 transition-colors">
                Exportar Relatório Mensal
              </button>
            </div>

            <div className="card-professional bg-primary/10 border-primary/20 p-8 space-y-4">
              <span className="material-symbols-outlined text-primary text-4xl">help_center</span>
              <h3 className="text-lg text-primary">Precisa de Ajuda?</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Nossa equipe de suporte está disponível para auxiliar com as configurações do seu Hub.
              </p>
              <button className="text-[10px] font-bold uppercase tracking-widest text-primary border-b-2 border-primary/20 pb-1">Falar com consultor</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
