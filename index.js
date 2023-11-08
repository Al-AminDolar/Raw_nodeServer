// MY very first node server

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({ name: "Al-amin Dolar", age: 20, profession: "Engineer" })
    );
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<p>This Is a Contact page</p>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<p>This Is a Contact page</p>");
    res.end();
  }
});

const PORT = 5000;
server.listen(PORT);
console.log(`Server is running ${PORT}`);
