const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'))

//express HBS engine
hbs.registerPartials(__dirname + '/views/partial');
app.set('view engine', 'hbs');


app.get('/home', (req, res) => {
    res.render('home', {
        nombre: 'marisol valdivia rivaz',

    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'marisol',

    });
});

app.listen(port, () => {
    console.log(`escuchando puerto ${port}`);
});