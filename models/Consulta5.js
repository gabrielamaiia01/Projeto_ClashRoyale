const mongoose = require('mongoose');

const Consulta5Schema = new mongoose.Schema({
  combo: {
    type: [String],
    required: true
  },
  taxa_vitoria: {
    type: Number,
    required: true
  },
  player_tags: {
    type: [String],
    required: true
  },
  tamanho_combo: {
    type: Number,
    required: true
  },
  taxa_vitoria_minima: {
    type: Number,
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
  collection: 'consulta_5'
});

module.exports = mongoose.model('Consulta5', Consulta5Schema);
