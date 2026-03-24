const ofertas = [
  {
    id: 1,
    nome: 'Missa',
    descricao: 'Contribua com a celebração de hoje',
    icone: 'church',
    chavePix: process.env.DEFAULT_PIX_KEY || 'email@igreja.com.br',
  },
  {
    id: 2,
    nome: 'Construção',
    descricao: 'Ajude na obra do novo templo',
    icone: 'construction',
    chavePix: process.env.DEFAULT_PIX_KEY || 'email@igreja.com.br',
  },
  {
    id: 3,
    nome: 'Dízimo',
    descricao: 'Partilhe sua fidelidade mensal',
    icone: 'heart',
    chavePix: process.env.DEFAULT_PIX_KEY || 'email@igreja.com.br',
  },
  {
    id: 4,
    nome: 'Ação Social',
    descricao: 'Apoie quem mais precisa',
    icone: 'hands',
    chavePix: process.env.DEFAULT_PIX_KEY || 'email@igreja.com.br',
  },
];

module.exports = ofertas;
