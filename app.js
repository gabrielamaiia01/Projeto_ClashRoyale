const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Conectando ao MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('🟢 Conectado ao MongoDB'))
  .catch((err) => console.error('🔴 Erro ao conectar ao MongoDB:', err));

// Definição do modelo para a coleção `consulta_1`
const ConsultaSchema = new mongoose.Schema({
  consulta: String,
  carta_id: Number,
  carta_nome: String,
  player_tags: [String],
  intervalo_timestamp: {
    inicio: String,
    fim: String
  },
  resultados: {
    media_vitorias: Number,
    media_derrotas: Number,
    media_empates: Number,
    total_batalhas: Number
  },
  resultados_por_jogador: [{
    player_tag: String,
    total_batalhas: Number,
    vitorias: Number,
    derrotas: Number,
    empates: Number
  }],
  data_insercao: Date
});

// Criando o modelo referenciando `consulta_1`
const Consulta = mongoose.model('Consulta', ConsultaSchema, 'consulta_1');

// Rota raiz para testar a API
app.get('/', (req, res) => {
  res.send('🟢 API rodando! Use /consulta para acessar os dados.');
});

// Rota para buscar todos os dados da coleção `consulta_1`
app.get('/consulta', async (req, res) => {
  try {
    const dados = await Consulta.find();
    console.log('🔎 Dados encontrados:', dados);
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});

// Rota para adicionar novos dados à coleção `consulta_1`
app.post('/consulta', async (req, res) => {
  try {
    const novoDado = new Consulta(req.body);
    await novoDado.save();
    res.status(201).json(novoDado);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao salvar dados', detalhes: err.message });
  }
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
