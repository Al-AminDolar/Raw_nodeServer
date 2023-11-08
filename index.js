// MY very first node server

const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello Node js");
});

const PORT = 5000;
server.listen(PORT);
console.log(`Server is running ${PORT}`);
