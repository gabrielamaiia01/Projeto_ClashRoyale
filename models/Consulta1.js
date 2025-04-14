const mongoose = require('mongoose');

const ResultadoPorJogadorSchema = new mongoose.Schema({
  player_tag: { type: String, required: true },
  total_batalhas: { type: Number, required: true },
  vitorias: { type: Number, required: true },
  derrotas: { type: Number, required: true },
  empates: { type: Number, required: true }
}, { _id: false });

const IntervaloTimestampSchema = new mongoose.Schema({
  inicio: { type: String, required: true },
  fim: { type: String, required: true }
}, { _id: false });

const ResultadosSchema = new mongoose.Schema({
  media_vitorias: { type: Number, required: true },
  media_derrotas: { type: Number, required: true },
  media_empates: { type: Number, required: true },
  total_batalhas: { type: Number, required: true }
}, { _id: false });

const Consulta1Schema = new mongoose.Schema({
  consulta: { type: String, required: true },
  carta_id: { type: Number, required: true },
  carta_nome: { type: String, required: true },
  player_tags: { type: [String], required: true },
  intervalo_timestamp: { type: IntervaloTimestampSchema, required: true },
  resultados: { type: ResultadosSchema, required: true },
  resultados_por_jogador: { type: [ResultadoPorJogadorSchema], required: true },
  data_insercao: { type: Date, required: true }
}, {
  collection: 'consulta_1'
});

module.exports = mongoose.model('Consulta1', Consulta1Schema);
