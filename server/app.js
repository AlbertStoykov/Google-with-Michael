const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express');
const cors = require('cors');
const app = express();
const dummy_data = require('./data')

app.use(cors());

const api_key = "d500ef44ddda8ba101535c5264265a1f857a7e2408e7f6b7d9d71ecf6089f06d"

app.get('/search', (req, res) => {
    const search_query = req.query
    console.log(search_query.q)
    const params = new URLSearchParams ({
        q: `${search_query.q}`,
        location: "London",
        google_domain: "google.co.uk",
        safe: "active",
        engine: "google",
        api_key: "d500ef44ddda8ba101535c5264265a1f857a7e2408e7f6b7d9d71ecf6089f06d"
    })

    const url = `https://serpapi.com/search.json?${params.toString()}`

    //Uncomment to get live data
    /*fetch(url)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(console.warn)*/

    res.json(dummy_data)
})

module.exports = app