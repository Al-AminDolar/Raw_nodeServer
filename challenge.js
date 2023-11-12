// Read the instructions given below and try it:
// 1 You will have to create a server using core node_modules where there will be a root route (‘/’).
// 2 When a user hits the root route(‘/) with GET request you will have to send an HTML file containing ‘‘Welcome to Full Stack Development “.

const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<p>Hi i am here</p>");
    res.end();
  } else if (req.url == "/read") {
    fs.readFile("first.txt", (err, data) => {
      if (err) {
        res.write("data load fail");
        res.end();
      } else {
        //   res.write("data load successfully");
        res.write(data);
        res.end();
      }
    });
  } else if (req.url == "/write") {
    fs.readFile("first.txt", (err, data) => {
      if (err) {
        res.write("data load fail");
        res.end();
      } else {
        fs.writeFile("new.txt", data, (err) => {
          if (err) {
            res.write("Data failed to write");
            res.end();
          } else {
            res.write("Data successfully  write");
            res.end();
          }
        });
      }
    });
  } else if (req.url == "/append") {
    fs.appendFile("first.txt", "No! It will be full not pull !", (err) => {
      if (err) {
        res.write("Data failed to write");
        res.end();
      } else {
        res.write("Data successfully  write");
        res.end();
      }
    });
  }
  if (req.url == "/delete") {
    fs.unlink("new.txt", (err) => {
      if (err) {
        res.write("failed to delet");
        res.end();
      } else {
        res.write("File successfully  delete");
        res.end();
      }
    });
  }
  //
  //
  // Syncrnous method
  //   const data = fs.readFileSync("first.txt");
  //   res.write(data);
  //   res.end();
});

const PORT = 8000;
server.listen(PORT);
console.log(`servrt is running ${PORT}`);

// 3 You will have to create a file in the root folder of your project called first.txt containing some text.
// For example: “ I am a pull stack developer !!! 🤣 ”
//  4 There will be four more routes to handle requests. When a user hits the routes you will have to do the following:
//  1 '/read' - to read the first.txt file from the file system using the core fs module
// 2 '/write' - You have to read the text of the first.txt file and write it to the second.txt file.
// 3 '/append' - You have to append the text “ No! It will be full not pull ! 😑 ” in the first.txt file.
//  4 '/delete' - You have to delete the second.txt file
