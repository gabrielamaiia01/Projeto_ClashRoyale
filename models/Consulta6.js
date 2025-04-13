const mongoose = require('mongoose');

const ResultadoSchema = new mongoose.Schema({
  jogador: {
    type: String,
    required: true
  },
  carta: {
    type: String,
    required: true
  },
  taxa_vitoria: {
    type: Number,
    required: true
  },
  usos: {
    type: Number,
    required: true
  }
}, { _id: false });

const Consulta6Schema = new mongoose.Schema({
  consulta: {
    type: String,
    required: true
  },
  player_tags: {
    type: [String],
    required: true
  },
  min_uses: {
    type: Number,
    required: true
  },
  resultados: {
    type: [ResultadoSchema],
    required: true
  },
  data_insercao: {
    type: Date,
    required: true
  }
}, {
  collection: 'consulta_6'
});

module.exports = mongoose.model('Consulta6', Consulta6Schema);
