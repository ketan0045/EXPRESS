const express = require('express');
const app = express();
const port = 3000

app.get("/", (req, res) => {
    // when multiple then use write
    res.write("<h1>Hello world</h1>");
    res.write("<h1>Hello world again</h1>");
    res.end();
});

app.get("/about", (req, res) => {
    res.send("Hello world about");
});

app.get("/contact", (req, res) => {
    res.status(200).send("Hello world contact");
});

// app.get("/temp", (req, res) => {
//     res.send([{
//         id: 1,
//         name: "jay"
//     }, {
//         id: 2,
//         name: "jay"
//     }, {
//         id: 3,
//         name: "jay"
//     }]);
// });

app.get("/temp", (req, res) => {
    res.json([{
        id: 1,
        name: "jayesh"
    }, {
        id: 2,
        name: "jayesh"
    }, {
        id: 3,
        name: "jayesh"
    }]);
});

app.listen(port, () => {
    console.log(`listing port no.${port}`);
})  