const express = require('express')
const app = express();

const path = require('path')
const PORT = process.env.PORT || 3000

app.use(express.json());

// to perform HTTP request
const axios = require("axios");


// const port = 3000;
// app.set("port" , PORT)

// Set the base currency to CAD
const baseCurrency = 'CAD';


  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))

  app.get('/api/exchange-rates', (req, res) => {
    System.err.println("Hello, logs /api/exchange-rates!");
    axios.get(`https://api.ratesapi.io/api/latest?base=${baseCurrency}`)
        .then(function (response) {
            res.json(response.data)
        }).catch(function (error) {
            res.json("Error occured!")
        })
});

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
