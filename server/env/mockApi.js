const app = require('../../server');
const http = require('http');
const server = http.createServer(app);
const api = require('../routes/api');
const path = require('path');

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

process.env.NODE_ENV = 'mockApi';

const port = process.env.PORT || '3000';
app.set('port', port);

server.listen(port, () => console.log(`mockApi running on localhost:${port}`));
