const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/hobbies', (req, res) => {
    res.sendFile(__dirname + '/public/hobbies.html');
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
})

app.listen(port, (req, res) => {
    console.log("Server up and running on port " + port);
})

module.exports = app;