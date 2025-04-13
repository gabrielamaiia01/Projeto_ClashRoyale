// models/Consulta4.js
const mongoose = require('mongoose');

const Consulta4Schema = new mongoose.Schema({
  consulta: {
    type: String,
    required: true
  },
  carta: {
    type: String,
    required: true
  },
  player_tags: {
    type: [String],
    required: true
  },
  porcentagem_trofeus: {
    type: Number,
    required: true
  },
  total_vitorias: {
    type: Number,
    required: true
  }
}, {
  collection: 'consulta_4' // nome exato da collection no MongoDB
});

module.exports = mongoose.model('Consulta4', Consulta4Schema);
