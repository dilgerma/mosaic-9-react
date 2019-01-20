const http = require('http');
const Tailor = require('node-tailor');
const tailor = new Tailor({
});
const server = http.createServer(tailor.requestHandler);
server.listen(process.env.PORT || 8080);
