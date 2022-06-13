const express = require("express");
const app = express();
const fs = require('fs');
const cors = require('cors');
const port = 3082;

app.use(cors());

// Home route
app.get("/", (req, res) => {
    res.send("harmony one!");
});

// Mock API
app.get("/harmony.json", (req, res) => {
    fs.readFile(__dirname + '/' + 'harmony.json', 'utf8', (err, data) => {
        res.end(data);
    });
});

app.listen(port, () => {
    console.log(`Visit http://localhost:3082`);
});
