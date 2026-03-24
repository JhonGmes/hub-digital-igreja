import { useState, useEffect } from 'react';
import { getOfertas } from '../services/api';
import OfertaCard from '../components/OfertaCard';

export default function Oferta() {
  const [ofertas, setOfertas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOfertas() {
      try {
        const data = await getOfertas();
        setOfertas(data);
      } catch (err) {
        setError('Não foi possível carregar as ofertas. Tente novamente.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchOfertas();
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-warm-white to-blue-soft/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Acolhimento */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
            <span className="text-3xl">🙏</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            Faça sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">Oferta</span>
          </h1>
          <p className="text-dark/50 text-lg max-w-lg mx-auto leading-relaxed">
            Sua contribuição é um gesto de fé e amor 🙏
          </p>
          <div className="mt-6 w-20 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full" />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-gold/20 border-t-gold rounded-full animate-spin" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-4">
              <span className="text-3xl">⚠️</span>
            </div>
            <p className="text-dark/60 text-lg">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-gold text-white rounded-xl hover:bg-gold-dark transition-colors"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {/* Offering Cards */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ofertas.map((oferta, index) => (
              <OfertaCard key={oferta.id} oferta={oferta} index={index} />
            ))}
          </div>
        )}

        {/* Encouragement */}
        {!loading && !error && (
          <div className="text-center mt-16 animate-fade-in delay-500">
            <p className="text-dark/40 text-sm italic">
              "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria."
            </p>
            <p className="text-dark/30 text-xs mt-2">2 Coríntios 9:7</p>
          </div>
        )}
      </div>
    </div>
  );
}
