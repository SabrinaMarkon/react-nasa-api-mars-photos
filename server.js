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

app.use(cors());
app.use(bodyParser.json());

function getYesterdaysDate() {
  let date = new Date();
  date.setDate(date.getDate()-1);
  return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
}

app.get('/api', (req, res) => {
  let querystring = '';
  if (req.query.solInput) {
    // user submitted search.
    querystring += `&sol=${req.query.solInput}`;
    if (req.query.cameraInput) {
      querystring += `&camera=${req.query.cameraInput}`;
    }
  } else {
    // default search.
    if (req.query.earth_date) {
      querystring += `&earth_date=${req.query.earth_date}`;
    } else {
      let yesterday = getYesterdaysDate();
      querystring += `&earth_date=${yesterday}`;
    }
  }
  let API_URL = MAIN_API_URL + querystring;
  axios.get(API_URL)
    .then(response => {
      // res.send(response.data.photos[0].img_src);
      res.json(response);
    })
    .catch(err => {
      res.send(err);
    });

});

// app.get('*', (res) => res.send('Not found')); // catch all for get requests.
// app.post('*', (res) => res.send('Not found')); // catch all for post requests.

app.listen(PORT, () => console.log(`Server listening at port ${PORT}...`));

