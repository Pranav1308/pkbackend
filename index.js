require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello PK!')
})

app.get('/gamer', (req, res) => {
    res.send("welcome to pk's gaming world")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login to your gaming account!</h1>")
})

app.get('/valo', (req, res) => {
    res.send("<h2>Welcome to Valorant Agent!</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app is listening on port${port}`)
})