const mongoose = require('mongoose');

const Consulta3Schema = new mongoose.Schema({
  consulta: {
    type: String,
    required: true
  },
  deck: {
    type: [String],
    required: true
  },
  players: {
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
  },
  total_derrotas: {
    type: Number,
    required: true
  }
}, {
  collection: 'consulta_3'
});

module.exports = mongoose.model('Consulta3', Consulta3Schema);
