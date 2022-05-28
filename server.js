const express = require("express");
const app = express();
const fs = require('fs');
const cors = require('cors');
const port = 3077;

app.use(cors());

// Home route
app.get("/", (req, res) => {
    res.send("404");
});

// Mock API
app.get("/harmony.json", (req, res) => {
    fs.readFile(__dirname + '/' + 'harmony.json', 'utf8', (err, data) => {
        res.end(data);
    });
});

app.listen(port, () => {
    console.log(`Visit http://localhost:3077`);
});
