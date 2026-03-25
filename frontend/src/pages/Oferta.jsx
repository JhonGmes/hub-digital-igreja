import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Oferta() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 'dizimo', title: 'Dízimo', icon: 'payments', desc: 'Sua contribuição mensal para a manutenção da casa.' },
    { id: 'oferta', title: 'Oferta', icon: 'favorite', desc: 'Gesto espontâneo de amor e gratidão pela vida.' },
    { id: 'obra', title: 'Obras', icon: 'construction', desc: 'Apoio à reforma e ampliação do nosso templo.' },
    { id: 'missao', title: 'Missão', icon: 'public', desc: 'Recursos destinados a projetos sociais e missionários.' },
  ];

  return (
    <div className="pt-32 pb-20 bg-zinc-50 min-h-screen">
      <div className="section-container">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <span className="font-bold text-xs tracking-widest uppercase text-primary">Contribua</span>
          <h1 className="text-4xl md:text-6xl">Sua oferta é um gesto de amor.</h1>
          <p className="text-lg text-zinc-500">
            Agradecemos imensamente por sua generosidade. Escolha uma das categorias abaixo para realizar sua contribuição de forma segura.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-slide-up">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className={`card-professional text-left group transition-all ${
                selectedCategory?.id === cat.id 
                  ? 'border-primary ring-2 ring-primary/10 shadow-xl' 
                  : 'hover:border-zinc-300'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${
                selectedCategory?.id === cat.id ? 'bg-primary text-white' : 'bg-zinc-100 text-zinc-500 group-hover:bg-primary/10 group-hover:text-primary'
              }`}>
                <span className="material-symbols-outlined">{cat.icon}</span>
              </div>
              <h3 className="text-xl mb-2">{cat.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </button>
          ))}
        </div>

        {/* Payment Section (Conditional) */}
        {selectedCategory && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <div className="bg-white border border-outline rounded-2xl overflow-hidden shadow-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 bg-zinc-900 text-white space-y-8">
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  Categoria Selecionada: {selectedCategory.title}
                </div>
                <h2 className="text-3xl text-white">Pronto para contribuir?</h2>
                <p className="text-zinc-400 leading-relaxed">
                  Utilize o QR Code ao lado ou clique no botão para copiar a chave PIX da nossa paróquia. Sua oferta será processada com total segurança.
                </p>
                <div className="pt-6">
                  <button 
                    onClick={() => navigate(`/pagamento/${selectedCategory.id}`)}
                    className="button-primary bg-primary w-full border-none py-4 text-base"
                  >
                    Prosseguir para Pagamento
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
              
              <div className="md:w-1/2 p-12 flex flex-col items-center justify-center bg-white space-y-6 text-center">
                <div className="w-48 h-48 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-300 border-2 border-dashed border-zinc-200">
                  <span className="material-symbols-outlined text-6xl">qr_code_2</span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-zinc-900">Escaneie o QR Code</p>
                  <p className="text-xs text-zinc-400">Aponte a câmera do seu app bancário</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
