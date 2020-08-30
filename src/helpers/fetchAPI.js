const axios = require("axios");
export default function searchMovie(url) {
  return axios(url);
}

// http://www.omdbapi.com/?apikey=5eec5adc&s=ninja
