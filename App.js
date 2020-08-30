import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import fetchMovie from "./src/helpers/fetchAPI";
export default function App() {
  const [url, setURL] = useState();
  const URL = "http://www.omdbapi.com/?apikey=5eec5adc&s=la vieja guardia";
  const [movies, setMovies] = useState();
  const fetchData = async () => {
    try {
      let response = await fetchMovie(URL);
      setMovies(response);
      console.log(movies);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
