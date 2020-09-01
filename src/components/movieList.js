import React from "react";
import { FlatList, View, Text } from "react-native";

export default function movieList({ data }) {
  const renderItem = ({ item }) => {
    return <Text>{`${item.Title}, ${item.Year}`}</Text>;
  };
  return (
    <View>
      <Text>Lista de peliculas</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdbID}
      />
    </View>
  );
}
