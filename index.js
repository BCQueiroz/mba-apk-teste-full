const express = require('express')
const port = process.env.PORT || 3001
const app = express()

app.get('/', (req, res) => {
    console.log('Nova feature.')
})

app.listen(port, () => {
    console.log(`Testando servidor, ${port}`)
})