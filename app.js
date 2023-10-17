<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // Nome do arquivo do banco de dados SQLite
});

// Definir o modelo de Aluno
const Aluno = sequelize.define('Aluno', {
  nome: Sequelize.STRING,
  idade: Sequelize.INTEGER,
  notaPrimeiroSemestre: Sequelize.FLOAT,
  notaSegundoSemestre: Sequelize.FLOAT,
  nomeProfessor: Sequelize.STRING,
  numeroSala: Sequelize.INTEGER,
});

sequelize.sync().then(() => {
  console.log('Tabelas sincronizadas');
});

// Rotas CRUD
app.post('/alunos', async (req, res) => {
  const { nome, idade, notaPrimeiroSemestre, notaSegundoSemestre, nomeProfessor, numeroSala } = req.body;
  try {
    const aluno = await Aluno.create({
      nome,
      idade,
      notaPrimeiroSemestre,
      notaSegundoSemestre,
      nomeProfessor,
      numeroSala,
    });
    return res.json(aluno);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar aluno' });
  }
});

app.get('/alunos', async (req, res) => {
  const alunos = await Aluno.findAll();
  return res.json(alunos);
});

app.get('/alunos/:id', async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (!aluno) {
    return res.status(404).json({ error: 'Aluno não encontrado' });
  }
  return res.json(aluno);
});

app.put('/alunos/:id', async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (!aluno) {
    return res.status(404).json({ error: 'Aluno não encontrado' });
  }

  const { nome, idade, notaPrimeiroSemestre, notaSegundoSemestre, nomeProfessor, numeroSala } = req.body;

  aluno.nome = nome;
  aluno.idade = idade;
  aluno.notaPrimeiroSemestre = notaPrimeiroSemestre;
  aluno.notaSegundoSemestre = notaSegundoSemestre;
  aluno.nomeProfessor = nomeProfessor;
  aluno.numeroSala = numeroSala;

  await aluno.save();
  return res.json(aluno);
});

app.delete('/alunos/:id', async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (!aluno) {
    return res.status(404).json({ error: 'Aluno não encontrado' });
  }

  await aluno.destroy();
  return res.json({ message: 'Aluno removido com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
=======
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // Nome do arquivo do banco de dados SQLite
});

// Definir o modelo de Aluno
const Aluno = sequelize.define('Aluno', {
  nome: Sequelize.STRING,
  idade: Sequelize.INTEGER,
  notaPrimeiroSemestre: Sequelize.FLOAT,
  notaSegundoSemestre: Sequelize.FLOAT,
  nomeProfessor: Sequelize.STRING,
  numeroSala: Sequelize.INTEGER,
});

sequelize.sync().then(() => {
  console.log('Tabelas sincronizadas');
});

// Rotas CRUD
app.post('/alunos', async (req, res) => {
  const { nome, idade, notaPrimeiroSemestre, notaSegundoSemestre, nomeProfessor, numeroSala } = req.body;
  try {
    const aluno = await Aluno.create({
      nome,
      idade,
      notaPrimeiroSemestre,
      notaSegundoSemestre,
      nomeProfessor,
      numeroSala,
    });
    return res.json(aluno);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar aluno' });
  }
});

app.get('/alunos', async (req, res) => {
  const alunos = await Aluno.findAll();
  return res.json(alunos);
});

app.get('/alunos/:id', async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (!aluno) {
    return res.status(404).json({ error: 'Aluno não encontrado' });
  }
  return res.json(aluno);
});

app.put('/alunos/:id', async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (!aluno) {
    return res.status(404).json({ error: 'Aluno não encontrado' });
  }

  const { nome, idade, notaPrimeiroSemestre, notaSegundoSemestre, nomeProfessor, numeroSala } = req.body;

  aluno.nome = nome;
  aluno.idade = idade;
  aluno.notaPrimeiroSemestre = notaPrimeiroSemestre;
  aluno.notaSegundoSemestre = notaSegundoSemestre;
  aluno.nomeProfessor = nomeProfessor;
  aluno.numeroSala = numeroSala;

  await aluno.save();
  return res.json(aluno);
});

app.delete('/alunos/:id', async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  if (!aluno) {
    return res.status(404).json({ error: 'Aluno não encontrado' });
  }

  await aluno.destroy();
  return res.json({ message: 'Aluno removido com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
>>>>>>> 01a3c2ad78b429ebf30bb2cc863be91be32f1dbc
});