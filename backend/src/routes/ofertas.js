const express = require('express');
const router = express.Router();
const ofertas = require('../data/ofertas');
const { gerarQRCode } = require('../services/qrCodeService');

// GET /api/ofertas — retorna todas as ofertas
router.get('/', (req, res) => {
  const ofertasResumo = ofertas.map(({ id, nome, descricao, icone }) => ({
    id,
    nome,
    descricao,
    icone,
  }));
  res.json(ofertasResumo);
});

// GET /api/ofertas/:id — retorna oferta específica com QR Code
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const oferta = ofertas.find((o) => o.id === id);

  if (!oferta) {
    return res.status(404).json({ error: 'Oferta não encontrada' });
  }

  try {
    const qrCode = await gerarQRCode(oferta.chavePix);
    res.json({
      id: oferta.id,
      nome: oferta.nome,
      descricao: oferta.descricao,
      icone: oferta.icone,
      chavePix: oferta.chavePix,
      qrCode,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar QR Code' });
  }
});

module.exports = router;
