require('dotenv').config()
const helmet = require('helmet')
const postgres = require('postgres')
const cool = require('cool-ascii-faces')
const express = require('express')
const crypto = require('crypto');
const passGenerator = require('./password-generator')
const ejs = require('ejs')

const port = process.env.PORT || 3001
const app = express()

const postgresConnection = postgres(process.env.DB_CONNECTION, {})

app.use(helmet())
app.set('view engine', 'ejs')

app.get('/message', (req, res) => {
    res.json({mes:'Hello World.'})
})

app.get('/cool', (req, res) => {
    res.send(cool())
})

app.get('/data', async (req, res) => {
    const users = await postgresConnection`SELECT * FROM tb_user` 
    res.render('index', { users })  
})

app.get('/gerar-senha', (req, res) => {
    const newPassword = passGenerator.generatePassword(19)
    res.json({ newPassword });
  });

app.listen(port, () => {
    console.log(`Testando servidor de teste v3, ${port}`)
})