// NodeJS doesn't have fetch built in
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express');
const cors = require('cors');
const app = express();
const dummy_data = require('./data')

// Please don't steal :)
const api_key = "d500ef44ddda8ba101535c5264265a1f857a7e2408e7f6b7d9d71ecf6089f06d"

app.use(cors());

// This allows access to the '../public' folder assets
app.use(express.static('public'));

// Send main page to browser
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// Send the search page HTML to browser
app.get('/search', (req, res) => {
    res.sendFile(__dirname + '/public/search.html')
})

app.get('/requestResults', (req, res) => {
    //Uncomment to get live data
    const params = new URLSearchParams({
        q: req.query.q,
        location: "London",
        google_domain: "google.co.uk",
        safe: "active",
        engine: "google",
        api_key: api_key
    })
    // Thanks to serpapi.com for the live Google search data in JSON
    // See '/data.js' for the file structure of a search
    const url = `https://serpapi.com/search.json?${params.toString()}`
    fetch(url)
    .then(search_response => search_response.json())
    .then(data => res.json(data))
    .catch(console.warn)
    //Comment above and uncomment below to use test data from search "coffee"
    //res.json(dummy_data)
})

module.exports = app
