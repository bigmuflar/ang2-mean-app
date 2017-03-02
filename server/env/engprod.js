const app = require('../../server');
const http = require('http');
const server = http.createServer(app);

process.env.NODE_ENV = 'engprod';

const port = process.env.PORT || '3000';
app.set('port', port);

server.listen(port, () => console.log(`API running on localhost:${port}`));
