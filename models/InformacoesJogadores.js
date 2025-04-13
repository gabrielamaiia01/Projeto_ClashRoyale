const mongoose = require('mongoose');

const InformacoesJogadorSchema = new mongoose.Schema({
  tag: String,
  nickname: String,
  trophies: Number,
  level: Number,
  data_atualizacao: Date
});

// O terceiro parâmetro aqui é o **nome exato da coleção no MongoDB**
module.exports = mongoose.model('InformacoesJogador', InformacoesJogadorSchema, 'informacoes_jogadores');
