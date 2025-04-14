// models/Consulta7.js
const mongoose = require('mongoose');

const RankingSchema = new mongoose.Schema({
  name: String,
  tag: String,
  trophies_per_member: Number,
});

const Consulta7Schema = new mongoose.Schema({
  consulta: { type: String, required: true },
  ranking: [RankingSchema],
  data_insercao: { type: Date, default: Date.now }
});

// Exporta o modelo com o nome "Consulta7"
module.exports = mongoose.model('Consulta7', Consulta7Schema);
