const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const address_url =
    "http://localhost:8000/contact?name=dolar&country=bangladesh";
  const parsed = url.parse(address_url, true);
  const queryObject = parsed.query;
  console.log(queryObject);
});
console.log(url);
const PORT = 8000;
server.listen(PORT);
console.log(`Server is runnig ${PORT}`);
