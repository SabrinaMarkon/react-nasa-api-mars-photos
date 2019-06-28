const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // body parsing middleware.
const cors = require('cors'); // Express middleware to enable cross-origin resource sharing (CORS).
const PORT = 4000;

// We need to get environmental variables from .env.
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.REACT_APP_NASA_API_KEY;

const MAIN_API_URL = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?api_key=' + API_KEY;
const DEFAULT_MAX_SOL = 2444;

app.get('/', (req, res) => {
  
});

app.listen(PORT, () => console.log(`Server listening at port ${PORT}...`));

