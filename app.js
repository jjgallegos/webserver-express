const http = require('http');
const { report } = require('process');

http.createServer((req, resp) => {
        resp.write('hola mundo');
        resp.end();
    })
    .listen(8080);
console.log('escuchando el puerto 8080');