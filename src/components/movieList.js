import React from "react";
import { FlatList, View, Text } from "react-native";

export default function movieList() {
  const mockData = [
    {
      Title: "La vieja de atrás",
      Year: "2010",
      imdbID: "tt1725023",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Casa Vieja",
      Year: "2010",
      imdbID: "tt1838485",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "De camisa vieja a chaqueta nueva",
      Year: "1982",
      imdbID: "tt0083796",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Luna Vieja",
      Year: "2013",
      imdbID: "tt3121060",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTk5NTQ4MzIyNF5BMl5BanBnXkFtZTgwMzc4MDExMDE@._V1_SX300.jpg",
    },
    {
      Title: "Ritmo nuevo y vieja ola",
      Year: "1965",
      imdbID: "tt0183711",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Vals de la Habana vieja",
      Year: "1988",
      imdbID: "tt0214266",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "En la vieja California",
      Year: "1963",
      imdbID: "tt0233645",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Vieja moralidad",
      Year: "1988",
      imdbID: "tt0258286",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "La vieja guardia",
      Year: "1985",
      imdbID: "tt0267095",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "La vieja que arde",
      Year: "1985",
      imdbID: "tt0291544",
      Type: "movie",
      Poster: "N/A",
    },
  ];

  const renderItem = ({ item }) => {
    return <Text>{`${item.Title}, ${item.Year}`}</Text>;
  };
  return (
    <View>
      <Text>Lista de peliculas</Text>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdbID}
      />
    </View>
  );
}
