import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOferta } from '../services/api';

export default function Pagamento() {
  const { id } = useParams();
  const [oferta, setOferta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOferta() {
      try {
        const data = await getOferta(id);
        setOferta(data);
      } catch (err) {
        setError('Não foi possível carregar os dados de pagamento.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchOferta();
  }, [id]);

  const handleCopy = async () => {
    if (!oferta?.chavePix) return;
    try {
      await navigator.clipboard.writeText(oferta.chavePix);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = oferta.chavePix;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (loading) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-warm-white to-blue-soft/30">
        <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !oferta) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-warm-white to-blue-soft/30">
        <div className="text-center animate-fade-in">
          <span className="text-5xl block mb-4">⚠️</span>
          <p className="text-dark/60 text-lg mb-4">{error || 'Oferta não encontrada.'}</p>
          <Link to="/oferta" className="text-gold font-semibold hover:underline">← Voltar às ofertas</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-warm-white to-blue-soft/30">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link
          to="/oferta"
          className="inline-flex items-center gap-2 text-dark/40 hover:text-gold transition-colors duration-300 mb-8 animate-fade-in"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Voltar às ofertas</span>
        </Link>

        {/* Payment Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-dark to-dark-light p-8 text-center">
            <span className="text-4xl block mb-3">🙏</span>
            <h1 className="text-2xl font-bold text-white mb-1">{oferta.nome}</h1>
            <p className="text-white/60 text-sm">{oferta.descricao}</p>
          </div>

          {/* Body */}
          <div className="p-8">
            {/* QR Code */}
            <div className="text-center mb-8">
              <p className="text-dark/40 text-xs uppercase tracking-widest font-semibold mb-4">
                Escaneie o QR Code
              </p>
              <div className="inline-block p-4 bg-white rounded-2xl shadow-md border border-gold/10">
                <img
                  src={oferta.qrCode}
                  alt={`QR Code PIX - ${oferta.nome}`}
                  className="w-56 h-56 mx-auto"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 h-px bg-dark/10" />
              <span className="text-dark/30 text-xs font-medium">ou copie a chave</span>
              <div className="flex-1 h-px bg-dark/10" />
            </div>

            {/* PIX Key */}
            <div className="bg-blue-soft/50 rounded-2xl p-4 mb-4">
              <p className="text-dark/40 text-xs uppercase tracking-widest font-semibold mb-2">
                Chave PIX
              </p>
              <p className="text-dark font-mono text-base font-semibold break-all">
                {oferta.chavePix}
              </p>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={`w-full py-4 rounded-2xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-3 ${
                copied
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-gradient-to-r from-gold to-gold-dark text-white hover:shadow-xl hover:shadow-gold/20 hover:scale-[1.02]'
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Chave copiada!</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                  </svg>
                  <span>Copiar chave PIX</span>
                </>
              )}
            </button>

            {/* Open bank app */}
            <a
              href={`pix:${oferta.chavePix}`}
              className="w-full mt-3 py-4 rounded-2xl font-semibold text-base border-2 border-dark/10 text-dark/60 hover:border-gold/30 hover:text-gold transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <span>Abrir app do banco</span>
            </a>
          </div>

          {/* Blessing */}
          <div className="bg-gradient-to-r from-gold/5 to-gold/10 p-6 text-center">
            <p className="text-dark/70 font-medium text-lg">
              Deus abençoe sua generosidade 🙏
            </p>
            <p className="text-dark/40 text-sm mt-1">
              Obrigado por sua contribuição
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
