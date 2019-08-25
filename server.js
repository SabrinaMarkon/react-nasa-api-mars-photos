const express = require('express');
const bodyParser = require('body-parser'); // body parsing middleware.
const app = express();
const cors = require('cors'); // Express middleware to enable cross-origin resource sharing (CORS).
const axios = require('axios'); // Axios to retrieve data from NASA endpoint.
const PORT = 3000;

// We need to get environmental variables from .env.
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.REACT_APP_NASA_API_KEY;
const MAIN_API_URL = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?api_key=' + API_KEY;

app.use(cors());

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api', (req, res) => {
    // Our parameters (which might vary in their existence depending on the search or default search) we need to send to the remote API are in req.body.
    const params = req.body;
    axios.get(MAIN_API_URL, {
        params
    })
        .then(response => {
            res.send(response.data.photos);
        })
        .catch(err => {
            res.send(err);
        });
});

app.get('*', (res) => res.send('Not found')); // catch all for get requests.
app.post('*', (res) => res.send('Not found')); // catch all for other post requests.

app.listen(PORT, () => console.log(`Server listening at port ${PORT}...`));

