// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/plain");
//   res.write("Hello world");
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("server running on port 3000");
// });
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const http = require('http');
// const fs = require('fs');

// const PORT=3000;

// fs.readFile('./index.html', function (err, html) {

//     if (err) throw err;

//     http.createServer(function(request, response) {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     }).listen(PORT, ()=>{
//       console.log("server running on port 3000");
//     });
// });
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer(function(request, response) {
//     switch (true) {
//         case './index.html':
//             response.writeHead(200, {
//                 'Content-Type': 'text/plain'
//             });
//             response.write("This is Test Message.");
//             response.end();
//             break;
//         case './index.html':
//             fs.readFile('./index.html', function(error, data) {
//                 if (error) {
//                     response.writeHead(404);
//                     response.write(error);
//                     response.end();
//                 } else {
//                     response.writeHead(200, {
//                         'Content-Type': 'text/html'
//                     });
//                     response.write(data);
//                     response.end();
//                 }
//             });
//             break;
//         case '/about':
//             fs.readFile('index.html', function(error, data) {
//                 if (error) {
//                     response.writeHead(404);
//                     response.write(error);
//                     response.end();
//                 } else {
//                     response.writeHead(200, {
//                         'Content-Type': 'text/html'
//                     });
//                     response.write(data);
//                     response.end();
//                 }
//             });
//             break;
//         default:
//             response.writeHead(404);
//             response.write("opps this doesn't exist - 404");
//             response.end();
//             break;
//     }
// });
// server.listen(3000, () =>{
//   console.log("server running on port 3000");
// });

//! Serve multiple HTML page with error handling
// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const server = http
//   .createServer((req, res) => {
//     const urlObj = url.parse(req.url, true);
//     const filename = "." + urlObj.pathname;
//     fs.readFile(filename, function (err, data) {
//       if (err) {
//         res.writeHead(404, { "content-type": "text/html" });
//         return res.end("Page not found !");
//       }
//       res.writeHead(200, { "content-type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8000, () => {
//     console.log("server running on port 8000");
//   });

//?(**************************************************)
// const fs   = require('fs'),
//       http = require('http');

// const server = http.createServer((req, res) => {
//     function serve(pathToFile) {
//         fs.readFile(pathToFile, (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.end(data);
//             }
//         });
//     }
    
//     /* function in use example */
//     switch (req.url) {
//         case '/': {
//             serve('index2.html');
//             break;
//         } 
//     }
// });


// server.listen(3000, () => { console.log('Server listening!') });