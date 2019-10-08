const conviteRepo = require('../../../infraestructure/repository/convite')

const obterConvite = async (req, res) => {
  const conv = await conviteRepo.obterConvite(req.params.id)
  res.json(conv)
}

module.exports = {
  obterConvite
}
