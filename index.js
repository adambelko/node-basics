const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    let path;
    switch (req.url) {
        case "/":
            path = "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path = "about.html";
            res.statusCode = 200;
            break;
        case "/contact":
            path = "contact.html";
            res.statusCode = 200;
            break;
        default:
            path = "404.html";
            res.statusCode = 404;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        res.end(data);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
