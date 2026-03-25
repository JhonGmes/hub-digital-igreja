import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOferta } from '../services/api';

export default function Pagamento() {
  const { id } = useParams();
  const [oferta, setOferta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOferta(id).then(data => {
      setOferta(data);
      setLoading(false);
    });
  }, [id]);

  const copyToClipboard = () => {
    if (oferta?.chavePix) {
      navigator.clipboard.writeText(oferta.chavePix);
      alert('Chave PIX copiada!');
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="w-12 h-12 border-4 border-primary-container border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container/30 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/oferta" className="inline-flex items-center gap-2 text-outline hover:text-primary transition-colors mb-12 uppercase font-label text-xs tracking-widest">
          <span className="material-symbols-outlined text-sm">arrow_back</span> 
          Voltar para categorias
        </Link>

        <div className="bg-surface-container-low rounded-xl p-8 md:p-16 relative overflow-hidden shadow-sm animate-fade-in">
          {/* Decorative background elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Side: QR Code Area */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-outline-variant/10">
                {oferta?.qrCodeUrl ? (
                  <img src={oferta.qrCodeUrl} alt="QR Code PIX" className="w-48 h-48" />
                ) : (
                  <div className="w-48 h-48 bg-zinc-50 flex items-center justify-center relative border border-zinc-100">
                    <span className="material-symbols-outlined text-6xl text-zinc-200">qr_code_2</span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <h4 className="font-headline text-2xl mb-2 italic">{oferta?.nome}</h4>
                <p className="font-body text-sm text-on-surface-variant">
                  Escaneie o código para realizar sua oferta de forma segura.
                </p>
              </div>
            </div>

            {/* Right Side: Manual Copy & Actions */}
            <div className="flex flex-col">
              <h4 className="font-serif text-2xl mb-6">Chave PIX</h4>
              <div className="mb-8">
                <label className="font-label text-xs tracking-widest uppercase text-outline block mb-2">Copia e Cola</label>
                <div className="flex items-center gap-2 p-4 bg-white rounded-lg border border-outline-variant/30 group">
                  <code className="font-mono text-xs text-on-surface truncate flex-1">
                    {oferta?.chavePix || 'Gerando chave...'}
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
                <a 
                  href={`pix:${oferta?.chavePix}`}
                  className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 text-center"
                >
                  <span className="material-symbols-outlined">account_balance</span>
                  Abrir App do Banco
                </a>
                
                <p className="text-center font-body text-xs text-on-surface-variant italic mt-6">
                  "Deus ama a quem dá com alegria." (2 Coríntios 9:7)
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-3 p-4 bg-white/50 rounded-lg border border-white">
                <span className="material-symbols-outlined text-primary">security</span>
                <p className="text-[10px] text-on-surface-variant leading-tight uppercase tracking-tighter">
                  Transação protegida por criptografia de ponta a ponta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
