require('dotenv').config()
const postgres = require('postgres')
const cool = require('cool-ascii-faces')
const express = require('express')
const port = process.env.PORT || 3001
const app = express()

const postgresConnection = postgres(process.env.DB_CONNECTION, {})

app.get('/', (req, res) => {
    console.log('Hello World.')
})

app.get('/cool', (req, res) => {
    res.send(cool())
})

app.get('/data', async (req, res) => {
    const users = await postgresConnection`SELECT * FROM tb_user` 
    res.json(users)   
})

app.listen(port, () => {
    console.log(`Testando servidor de teste v2, ${port}`)
})