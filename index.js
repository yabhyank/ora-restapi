const express = require('express')
const http = require("http");
const fs = require('fs').promises;

var cors = require('cors')

const app = express();
const port = 3000

app.get('/', function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
           res.setHeader("Content-Type", "text/html");
           res.writeHead(200);
           res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
  })

app.listen(port, () => console.log("nodeOracleRestApi app listening on port %s!", port))
