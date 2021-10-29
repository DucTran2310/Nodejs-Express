const http = require("http");

// *createServer(): tạo một máy chủ HTTP
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page");
    }
    if (req.url === "/about") {
        res.end("Welcome to our short history");
    }
    res.end(`
        <h1>Oops!!!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back home</a>
    `);
});

server.listen(5000);
