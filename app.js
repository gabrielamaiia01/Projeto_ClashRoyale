const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;
const cors = require('cors');  // Instale se necessário: npm install cors
app.use(cors());

// Middleware
app.use(express.json());

// Conectando ao MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('🟢 Conectado ao MongoDB'))
  .catch((err) => console.error('🔴 Erro ao conectar ao MongoDB:', err));



// Rota raiz para testar a API
app.get('/', (req, res) => {
  res.send('🟢 API rodando! Use /consulta para acessar os dados.');
});

const Consulta1 = require('./models/Consulta1')
// Rota para buscar todos os dados da coleção consulta_1
app.get('/consulta1', async (req, res) => {
  try {
    const dados = await Consulta1.find();
    console.log('🔎 Dados encontrados:', dados);
    res.json(dados);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});

const InformacoesJogador = require('./models/InformacoesJogadores');

app.get('/jogadores', async (req, res) => {
  try {
    const jogadores = await InformacoesJogador.find();
    res.json(jogadores);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar informações dos jogadores' });
  }
});
const Consulta2 = require('./models/Consulta2');
app.get('/consulta2', async (req, res) => {
  try {
    const dados = await Consulta2.find();
    console.log('🔎 Consulta2 encontrada:', dados);
    res.json(dados);
  } catch (err) {
    console.error('❌ Erro ao buscar dados da consulta2:', err);
    res.status(500).json({ error: 'Erro ao buscar dados da consulta2' });
  }
});

const Consulta3 = require('./models/Consulta3');

app.get('/consulta3', async (req, res) => {
  try {
    const dados = await Consulta3.find();
    console.log('🔍 Consulta3 encontrada:', dados);
    res.json(dados);
  } catch (err) {
    console.error('❌ Erro ao buscar dados da consulta3:', err);
    res.status(500).json({ error: 'Erro ao buscar dados da consulta3' });
  }
});

const Consulta4 = require('./models/Consulta4');

app.get('/consulta4', async (req, res) => {
  try {
    const dados = await Consulta4.find();
    console.log('📦 Consulta4 encontrada:', dados);
    res.json(dados);
  } catch (err) {
    console.error('❌ Erro ao buscar dados da consulta4:', err);
    res.status(500).json({ error: 'Erro ao buscar dados da consulta4' });
  }
});

const Consulta5 = require('./models/Consulta5');

app.get('/consulta5', async (req, res) => {
  try {
    const dados = await Consulta5.find();
    console.log('🔍 Consulta5 encontrada:', dados);
    res.json(dados);
  } catch (err) {
    console.error('❌ Erro ao buscar dados da consulta5:', err);
    res.status(500).json({ error: 'Erro ao buscar dados da consulta5' });
  }
});

const Consulta6 = require('./models/Consulta6');

app.get('/consulta6', async (req, res) => {
  try {
    const dados = await Consulta6.find();
    console.log('🔍 Consulta5 encontrada:', dados);
    res.json(dados);
  } catch (err) {
    console.error('❌ Erro ao buscar dados da consulta5:', err);
    res.status(500).json({ error: 'Erro ao buscar dados da consulta5' });
  }
});

const Consulta7 = require('./models/Consulta7');

app.get('/consulta7', async (req, res) => {
  try {
    const dados = await Consulta7.find();
    console.log('🔍 Consulta5 encontrada:', dados);
    res.json(dados);
  } catch (err) {
    console.error('❌ Erro ao buscar dados da consulta5:', err);
    res.status(500).json({ error: 'Erro ao buscar dados da consulta5' });
  }
});

const Consulta8 = require('./models/Consulta8');

app.get('/consulta8', async (req, res) => {
  try {
    const dados = await Consulta8.find();
    console.log('🔍 Consulta8 encontrada:', dados);
    res.json(dados);
  } catch (err) {
    console.error('❌ Erro ao buscar dados da consulta5:', err);
    res.status(500).json({ error: 'Erro ao buscar dados da consulta8' });
  }
});

const WinningDeck = require('./models/WinningDeck');
app.get('/winning-decks', async (req, res) => {
  try {
    const decks = await WinningDeck.find();
    res.json(decks);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar decks' });
  }
});



// Rota para adicionar novos dados à coleção consulta_1
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