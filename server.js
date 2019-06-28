const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // body parsing middleware.
const cors = require('cors'); // Express middleware to enable cross-origin resource sharing (CORS).
const axios = require('axios'); // Axios to retrieve data from NASA endpoint.
const PORT = 3000;

// We need to get environmental variables from .env.
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.REACT_APP_NASA_API_KEY;
const MAIN_API_URL = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?api_key=' + API_KEY;
const DEFAULT_MAX_SOL = 2444;

app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  let API_URL = MAIN_API_URL + res.query();
  res.send(API_URL);
  // axios.get(API_URL)
  // .then(response => {
  // res.json(response);
  // })
  // .catch(() => res.send('Unable to retrieve data'));
});

// app.get('*', (res) => res.send('Not found')); // catch all for get requests.
// app.post('*', (res) => res.send('Not found')); // catch all for post requests.

app.listen(PORT, () => console.log(`Server listening at port ${PORT}...`));

