const mongoose = require('mongoose');

// Subschema para intervalo_timestamp
const IntervaloSchema = new mongoose.Schema({
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
    type: IntervaloSchema,
    required: true
  }
}, {
  collection: 'consulta_2'
});

module.exports = mongoose.model('Consulta2', Consulta2Schema);
