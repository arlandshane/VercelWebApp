const express = require('express')
const port = process.env.Port || 3000

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/hobbies', (req, res) => {
    res.send('<h1>Hobbies</h1><p>My hobbies are cooking and coding</p>')
})

app.get('/contact', (req, res) => {
    res.send('<h1>Contact</h1><p>Contact me at arlandshane@gmail.com</p>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1><p>My name is Shane Arland and I am a Web Developer</p>')
})

app.listen(port, (req, res) => {
    console.log("Server up and running on port " + port);
})