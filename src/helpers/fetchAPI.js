const axios = require("axios");
export default function searchMovie(url) {
  return axios(url).then((res) => res.data.Search);
}

// http://www.omdbapi.com/?apikey=5eec5adc&s=ninja
