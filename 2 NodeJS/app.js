const http = require('http');
const os = require('os');
const { AUTHOR, UUID } = process.env;

const hostname = os.hostname();
const port = 8000;

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method === 'GET' && req.url === '/hostname') {
    res.statusCode = 200;
    res.end(JSON.stringify({ hostname }));
  } else if (req.method === 'GET' && req.url === '/author') {
    res.statusCode = 200;
    res.end(JSON.stringify({ author: AUTHOR }));
  } else if (req.method === 'GET' && req.url === '/id') {
    res.statusCode = 200;
    res.end(JSON.stringify({ uuid: UUID }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
};

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});