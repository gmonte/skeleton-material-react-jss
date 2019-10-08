class PrecoChave {
  constructor(
    competencia = null,
    mercado = '',
    exibidora = '',
    programa = 0,
    secundagem = 0
  ) {
    this.competencia = competencia // 07/2019
    this.mercado = mercado // SP
    this.exibidora = exibidora // SP1
    this.programa = programa // JNAC
    this.secundagem = secundagem // 15 30 45 60
  }

  toString() {}
}

class Preco extends PrecoChave {
  constructor(
    competencia,
    mercado,
    exibidora,
    programa,
    secundagem,
    valor = 0.0
  ) {
    super(arguments)
    this.valor = valor
  }
}
module.exports = { PrecoChave, Preco }
