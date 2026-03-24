const express = require('express');
const router = express.Router();
const programacao = require('../data/programacao');

// GET /api/programacao — retorna a programação semanal
router.get('/', (req, res) => {
  res.json(programacao);
});

module.exports = router;
