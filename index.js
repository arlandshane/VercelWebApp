const express = require('express')
const port = process.env.Port || 3000

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/hobbies', (req, res) => {
    res.sendFile(__dirname + '/hobbies.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
})

app.listen(port, (req, res) => {
    console.log("Server up and running on port " + port);
})