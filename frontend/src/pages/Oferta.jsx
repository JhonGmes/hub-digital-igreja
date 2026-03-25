import { useState, useEffect, useRef } from 'react';
import { getOfertas, getOferta } from '../services/api';

export default function Oferta() {
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const paymentSectionRef = useRef(null);

  useEffect(() => {
    getOfertas().then(data => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  const handleSelect = async (id) => {
    setSelectedId(id);
    setPaymentData(null);
    const data = await getOferta(id);
    setPaymentData(data);
    
    // Scroll to payment section
    setTimeout(() => {
      paymentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const copyToClipboard = () => {
    if (paymentData?.chavePix) {
      navigator.clipboard.writeText(paymentData.chavePix);
      alert('Chave PIX copiada!');
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="w-12 h-12 border-4 border-primary-container border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* SECTION 1: Acolhimento (Greeting & Intent) */}
      <section className="pt-32 pb-20 max-w-screen-xl mx-auto px-6 animate-fade-in">
        <div className="w-full h-96 mb-16 rounded-xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10"></div>
          <img 
            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnWY6hu2Y-kKYvRAV12QyMnw80hEe1t8B9-EBaO27hTBaMpTJcwnKKr-ssaem3iwNwBRa_dOgRZcOLMFHZDQrYgLhNzdNJYCDeao0HoDilN0SXbIwsm1EkcFX-82RnksC0p9gl-tOsg82vSsBsuDsL7mdg3nEBvz8TFZ-n_crchDb3kpEENNtk6zfb7nnbo37oIwo1vjY57j5c2zJthR8ZHKrCz0RT4ETCyZkcBuV95tUHjdMDLYcY1p1G_EI-7aAPG4878qnd9btO"
            alt="Interior do Santuário"
          />
          <div className="absolute bottom-12 left-0 right-0 z-20 px-8">
            <span className="font-body text-white/90 text-sm tracking-[0.3em] uppercase mb-4 block">Oferta & Gratidão</span>
            <h1 className="font-serif text-5xl md:text-7xl text-white italic leading-tight">
              Um gesto de fé, <br/> uma ponte de amor.
            </h1>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 px-4 text-center">
          <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light">
            Sua contribuição sustenta nossa missão e mantém viva a chama da comunidade. Escolha como deseja manifestar seu apoio hoje.
          </p>
        </div>
      </section>

      {/* SECTION 2: Escolha (Offer Categories) */}
      <section className="max-w-screen-xl mx-auto px-6 mb-32 animate-slide-up">
        <div className="flex items-baseline justify-between mb-12 border-b border-outline-variant/20 pb-6">
          <h2 className="font-serif text-3xl italic text-on-surface">Destine sua doação</h2>
          <span className="font-body text-xs tracking-widest uppercase text-outline">Selecione uma categoria</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSelect(cat.id)}
              className={`group relative flex flex-col p-10 rounded-xl transition-all duration-500 text-left items-start outline-none focus:ring-2 focus:ring-primary-container ${
                selectedId === cat.id 
                  ? 'bg-surface-container-lowest border-2 border-primary-container/20 shadow-[0_30px_60px_rgba(77,70,53,0.08)]' 
                  : 'bg-surface-container-lowest shadow-[0_20px_40px_rgba(77,70,53,0.03)] hover:shadow-[0_30px_60px_rgba(77,70,53,0.08)]'
              }`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 transition-colors duration-500 ${
                selectedId === cat.id ? 'bg-primary-container' : 'bg-secondary-container group-hover:bg-primary-container'
              }`}>
                <span className={`material-symbols-outlined text-3xl transition-colors ${
                  selectedId === cat.id ? 'text-white' : 'text-primary group-hover:text-white'
                }`}>
                  {cat.icone}
                </span>
              </div>
              <h3 className="font-serif text-2xl mb-3 text-on-surface">{cat.nome}</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
                {cat.descricao}
              </p>
              <div className={`mt-auto flex items-center font-bold text-xs tracking-widest uppercase transition-all ${
                selectedId === cat.id ? 'text-primary' : 'text-primary group-hover:translate-x-2'
              }`}>
                {selectedId === cat.id ? 'Selecionado' : 'Selecionar'}
                <span className="material-symbols-outlined ml-2 text-sm">
                  {selectedId === cat.id ? 'check_circle' : 'arrow_forward'}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 3: Pagamento (Payment Section) */}
      <section 
        ref={paymentSectionRef}
        className={`max-w-4xl mx-auto px-6 pb-32 transition-all duration-700 ${
          selectedId ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="bg-surface-container-low rounded-xl p-8 md:p-16 relative overflow-hidden shadow-sm">
          {/* Decorative background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Side: QR Code Area */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-outline-variant/10">
                {paymentData?.qrCodeUrl ? (
                  <img src={paymentData.qrCodeUrl} alt="QR Code PIX" className="w-48 h-48" />
                ) : (
                  <div className="w-48 h-48 bg-zinc-50 flex items-center justify-center relative border border-zinc-100">
                    <span className="material-symbols-outlined text-6xl text-zinc-200">qr_code_2</span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <h4 className="font-serif text-xl mb-2">Escaneie o PIX</h4>
                <p className="font-body text-sm text-on-surface-variant">
                  Aponte a câmera do seu celular para realizar a oferta instantaneamente via {paymentData?.nome}.
                </p>
              </div>
            </div>

            {/* Right Side: Manual Copy & Actions */}
            <div className="flex flex-col">
              <h4 className="font-serif text-2xl mb-6">Chave para Cópia</h4>
              <div className="mb-8">
                <label className="font-label text-xs tracking-widest uppercase text-outline block mb-2">Chave Aleatória</label>
                <div className="flex items-center gap-2 p-4 bg-white rounded-lg border border-outline-variant/30 group">
                  <code className="font-mono text-xs text-on-surface truncate flex-1">
                    {paymentData?.chavePix || 'Gerando chave...'}
                  </code>
                  <button 
                    onClick={copyToClipboard}
                    className="p-2 hover:bg-surface-container transition-colors rounded-md text-primary" 
                    title="Copiar chave"
                  >
                    <span className="material-symbols-outlined">content_copy</span>
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={() => alert('Obrigado por sua doação!')}
                  className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
                >
                  <span>Concluir Doação</span>
                  <span className="material-symbols-outlined">send</span>
                </button>
                
                <a 
                  href={`pix:${paymentData?.chavePix}`}
                  className="w-full py-4 text-on-surface-variant font-bold text-sm tracking-widest uppercase hover:text-primary transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">account_balance</span>
                  Abrir App do Banco
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-3 p-4 bg-white/50 rounded-lg border border-white">
                <span className="material-symbols-outlined text-primary">security</span>
                <p className="text-[10px] text-on-surface-variant leading-tight uppercase tracking-tighter">
                  Transação processada de forma segura e criptografada. <br/>Sua privacidade é sagrada para nós.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
