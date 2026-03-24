require('dotenv').config();
const express = require('express');
const cors = require('cors');

const ofertasRoutes = require('./src/routes/ofertas');
const programacaoRoutes = require('./src/routes/programacao');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ofertas', ofertasRoutes);
app.use('/api/programacao', programacaoRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Hub Digital da Igreja — API funcionando!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Erro interno:', err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

// Export for Vercel
module.exports = app;

// Start server (only if not on Vercel)
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🕊️  Hub Digital da Igreja — Backend rodando na porta ${PORT}`);
    console.log(`📡 API disponível em http://localhost:${PORT}/api`);
  });
}
