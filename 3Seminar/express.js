const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(__dirname + '/static/'));

app.get('/', (req, res) => {
    let data = fs.readFileSync('./static/Main.txt', 'utf8');
    let b = Number(data);
    b += 1;
    let f = String(b);
    res.send(`<h1>Main:</h1><p>Просмотров: ${f}</p><a href="/about">About</a>`);
    fs.writeFileSync('./static/Main.txt', f);
});
app.get('/about', (req, res) => {
    let data = fs.readFileSync('./static/About.txt', 'utf8');
    let b = Number(data);
    b += 1;
    let f = String(b);
    res.send(`<h1>About</h1><p>Просмотров: ${f}</p><a href="/">Main</a>`);
    fs.writeFileSync('./static/About.txt', f);
});
app.listen(3000);