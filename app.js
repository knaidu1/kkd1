const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello Naidu DevOps Project Running 🚀");
  res.end();
});

server.listen(3000);
