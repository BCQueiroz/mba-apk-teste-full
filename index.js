const cool = require('cool-ascii-faces')
const express = require('express')
const port = process.env.PORT || 3001
const app = express()

app.get('/', (req, res) => {
    console.log('Hello World.')
})

app.get('/cool', (req, res) => {
    res.send(cool())
})

app.get('/happy', (req, res) => {
    console.log('Nova feature3.')
})

app.listen(port, () => {
    console.log(`Testando servidor, ${port}`)
})