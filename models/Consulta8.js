const mongoose = require('mongoose');

const Consulta8Schema = new mongoose.Schema({
  consulta: {
    type: String,
    required: true
  },
  carta: {
    type: String,
    required: true
  },
  min_streak: {
    type: Number,
    required: true
  },
  intervalo_timestamp: {
    inicio: {
      type: String,
      required: true
    },
    fim: {
      type: String,
      required: true
    }
  },
  player_tags: {
    type: [String],
    required: true
  },
  jogadores_vencedores: {
    type: [String],
    required: true
  },
  data_insercao: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Consulta8', Consulta8Schema, 'consulta_8');

