import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Image,
} from "react-native";
import fetchMovie from "./src/helpers/fetchAPI";
import { MovieList, SearchBar } from "./src/components/";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  let URL = `http://www.omdbapi.com/?apikey=5eec5adc&s=${query}`;

  //abstraer este bloque, ()=>(url, callback)
  const fetchData = async (url) => {
    try {
      let response = await fetchMovie(url, 50);
      setMovies(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData(URL);
  }, [query]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require("./assets/logo.jpeg")} />
      <SearchBar
        placeholder="Search"
        onChangeText={(text) => setQuery(text)}
        value={query}
      />
      <ActivityIndicator animating={loading} />
      <MovieList data={movies} onItemPress={setMovies} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
    width: 350,
    resizeMode: "contain",
    marginVertical: 20,
  },
});
