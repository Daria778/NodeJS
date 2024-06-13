const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200,
            { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<a href="http://127.0.0.1:8080/about">about</a>');
    }
    else if (req.url === '/about') {
        res.writeHead(200,
            { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(' <a href="http://127.0.0.1:8080/">main</a>');
    }
    else {
        res.writeHead(404,
            { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('Undefined')
    }

});
const port = 8080;
server.listen(port, () => {
    console.log('Сервер запущен');
})