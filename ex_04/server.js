const http = require('node:http');

const hostname = 'localhost';
const port = 4242;

let express = require('express');

let app = express();


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
app.get('/name/:name', (req, res) => {
    console.log(req.params.name);
    const name=req.params.name;
    res.send(name);
  })
  