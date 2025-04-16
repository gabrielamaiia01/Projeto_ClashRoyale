const mongoose = require('mongoose');
 
const IntervaloSchema5 = new mongoose.Schema({
  inicio: {
    type: String,
    required: true,
    set: val => new Date(val)
  },
  fim: {
    type: String,
    required: true,
    set: val => new Date(val)
  }
}, { _id: false });
 
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
    type: IntervaloSchema5,
    required: true
  }
}, {
  collection: 'consulta_5'
});
 
module.exports = mongoose.model('Consulta5', Consulta5Schema);
 