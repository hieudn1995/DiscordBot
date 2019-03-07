const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('data.json', (err, file) => {

    let data = JSON.parse(file);
    data['count'] += 1;
    
    let out = `Page has been loaded ${data['count']} times`;

    fs.writeFileSync('data.json', JSON.stringify(data));

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(out);
    res.end();
  });
}).listen(8081);
