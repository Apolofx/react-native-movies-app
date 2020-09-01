import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import Details from "./details";
export default function movieList({ data, onItemPress }) {
  const updateItemState = (index) => {
    let data_copy = [...data];

    data_copy[index].details = !data[index].details;
    onItemPress(data_copy);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Text
          onPress={() => updateItemState(index)}
        >{`${item.Title}, ${item.Year}`}</Text>
        {item.details ? <Details movie={item.Title} /> : null}
      </View>
    );
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
