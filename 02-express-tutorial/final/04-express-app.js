const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
    // Resolve một đường dẫn tuyệt đối.
    res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
    res.status(404).send("resource not found");
});

app.listen(5000, () => {
    console.log("server is listening on port 5000...");
});
