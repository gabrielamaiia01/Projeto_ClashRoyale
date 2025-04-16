const mongoose = require('mongoose');
 
const IntervaloSchema3 = new mongoose.Schema({
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
}, { _id: false }); // _id: false para não criar um _id para esse subdocumento
 
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
    type: IntervaloSchema3,
    required: true
  },
  total_derrotas: {
    type: Number,
    required: true
  }
}, {
  collection: 'consulta_3'
});
 
module.exports = mongoose.model('Consulta3', Consulta3Schema);
 