const http = require('http');
var fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url === '/') {
    fs.readFile('./index.html', null, function (error, data) {
      if (error) {
        res.writeHead(404);
        res.write('File not found');
      } else {
        res.write(data);
      }
      res.end();
    });
  }

  if (req.url === '/about') {
    fs.readFile('./about.html', null, function (error, data) {
      if (error) {
        res.writeHead(404);
        res.write('File not found');
      } else {
        res.write(data);
      }
      res.end();
    });
  }

  if (req.url == '/contact') {
    fs.readFile('./contact.html', null, function (error, data) {
      if (error) {
        res.writeHead(404);
        res.write('File not found');
      } else {
        res.write(data);
      }
      res.end();
    });
  }

  if (req.url === '/home') {
    res.writeHead(302, {
      Location: '/', // This is your url which you want
    });
    res.end();
  }
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});

//   res.write('index.html');

// if(req.url === '/'){
//   res.writeHead(200, {"Content-Type": "text/html"});
//   res.write('welcome to my portfolio website');
//     // res.send("hello")
// }
// if(req.url === '/about'){
//     res.end('About page')
// }
// if(req.url === '/contact'){
//     res.end('contact page')
// }
