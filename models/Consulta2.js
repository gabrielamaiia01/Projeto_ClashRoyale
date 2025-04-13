const mongoose = require('mongoose');

const Consulta2Schema = new mongoose.Schema({
  deck_ids: {
    type: [Number],
    required: true
  },
  cartas: {
    type: [String],
    required: true
  },
  taxa_vitoria: {
    type: Number,
    required: true
  },
  vitorias: {
    type: Number,
    required: true
  },
  total_partidas: {
    type: Number,
    required: true
  },
  jogadores_analisados: {
    type: [String],
    required: true
  },
  intervalo_timestamp: {
    inicio: {
      type: Date,
      required: true
    },
    fim: {
      type: Date,
      required: true
    }
  }
}, {
  collection: 'consulta_2'
});

module.exports = mongoose.model('Consulta2', Consulta2Schema);
