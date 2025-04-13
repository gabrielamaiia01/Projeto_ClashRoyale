const mongoose = require('mongoose');

const RankingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  trophies_per_member: {
    type: Number,
    required: true
  }
}, { _id: false });

const Consulta7Schema = new mongoose.Schema({
  consulta: {
    type: String,
    required: true
  },
  ranking: {
    type: [RankingSchema],
    required: true
  },
  data_insercao: {
    type: Date,
    required: true
  }
}, {
  collection: 'consulta_7'
});

module.exports = mongoose.model('Consulta7', Consulta7Schema);
