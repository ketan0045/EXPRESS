const path = require('path');
const express = require('express');
const app = express();

var requests = require('requests');

// for require partial (partial means common components)
const hbs = require('hbs');


//console.log(path.join(__dirname,"../public"));

const staticpath = path.join(__dirname, "../public");
const templatespath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

// built in Middleware
// app.use(express.static(staticpath));

// to set view engine 
app.set('view engine', 'hbs');
// in case folder name not views then using below (may ne under ni file nu name views hoy to pan below valu may krvu)
app.set('views', templatespath);
// below maate pela (const hbs = require('hbs'); aa krvu)
hbs.registerPartials(partialpath);

// temple engine root below (temple engine in using render)

// temple engine part below 

app.get("/", (req, res) => {
    res.render("index", {
        changeName: "jay"
    });
});


app.get("/", (req, res) => {
    res.send("Hello world");
});

// temple engine part below
app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/apicallwithtemplateengine", (req, res) => {
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=a6906cd9ad62832601f49d1d3d2b2f38`)
        .on('data', (chunk) => {
            const objData = JSON.parse(chunk)
            const arrData = [objData]
            console.log(`city name ${arrData[0].name} and the temp is ${arrData[0].main.temp} `)

            res.write(arrData[0].name)

        })
        .on('end', function (err) {
            if (err) return console.log('connection closed due to errors', err);

            console.log('end');
            res.end()
        });
});

app.get("/about", (req, res) => {
    res.send("Hello world about");
});

app.get("/about/*", (req, res) => {
    res.render("404", {
        errorcommonet: "Oop about about pages not found"
    });
})

app.get("*", (req, res) => {
    res.render("404", {
        errorcommonet: "Oop pages not found"
    });
});

app.listen(3000, () => {
    console.log("listing port 3000");
});






