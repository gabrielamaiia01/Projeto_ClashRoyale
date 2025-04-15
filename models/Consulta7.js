// models/Consulta7.js
const mongoose = require('mongoose');

const RankingItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tag: { type: String, required: true },
  trophies_per_member: { type: Number, required: true }
});

const Consulta7Schema = new mongoose.Schema({
  consulta: { type: String, required: true },
  ranking: { type: [RankingItemSchema], required: true },
  data_insercao: { type: Date, default: Date.now }
}, {
  collection: 'consulta_7'
});

module.exports = mongoose.model('Consulta7', Consulta7Schema);
