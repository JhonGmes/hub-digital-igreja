const ofertas = [
  {
    id: 1,
    nome: 'Missa',
    descricao: 'Intenções particulares e celebrações comunitárias.',
    icone: 'auto_awesome',
    chavePix: process.env.DEFAULT_PIX_KEY || 'pix@hubigreja.com.br',
  },
  {
    id: 2,
    nome: 'Construção',
    descricao: 'Manutenção e expansão física do nosso santuário.',
    icone: 'architecture',
    chavePix: process.env.DEFAULT_PIX_KEY || 'obra@hubigreja.com.br',
  },
  {
    id: 3,
    nome: 'Dízimo',
    descricao: 'Seu compromisso mensal com a vida eclesial.',
    icone: 'volunteer_activism',
    chavePix: process.env.DEFAULT_PIX_KEY || 'dizimo@hubigreja.com.br',
  },
  {
    id: 4,
    nome: 'Ação Social',
    descricao: 'Apoio direto às famílias e projetos da paróquia.',
    icone: 'diversity_3',
    chavePix: process.env.DEFAULT_PIX_KEY || 'social@hubigreja.com.br',
  },
];

module.exports = ofertas;
