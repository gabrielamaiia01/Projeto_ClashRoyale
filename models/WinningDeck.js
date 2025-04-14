const mongoose = require('mongoose');

const WinningDeckSchema = new mongoose.Schema({
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
    inicio: {
      type: String,
      required: true
    },
    fim: {
      type: String,
      required: true
    }
  }
}, {
  collection: 'winning_decks' // garante que use o nome correto da coleção
});

module.exports = mongoose.model('WinningDeck', WinningDeckSchema);
