const axios = require("axios");
export default async function searchMovie(url, max_results = 10) {
  const res = await axios(url);
  let movieList = res.data.Response === "False" ? [] : res.data.Search;
  if (movieList.length > max_results) {
    movieList = movieList.slice(0, max_results);
  }
  return movieList;
}

// http://www.omdbapi.com/?apikey=5eec5adc&s=ninja
