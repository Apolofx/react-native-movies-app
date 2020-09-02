import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import Details from "./details";
import { Entypo } from "@expo/vector-icons";
export default function movieList({ data, onItemPress }) {
  const updateItemState = (index) => {
    let data_copy = [...data];
    data_copy[index].details = !data[index].details;
    onItemPress(data_copy);
  };

  const renderItem = ({ item, index }) => {
    return (
      <>
        <View style={styles.item}>
          <Entypo
            name={item.details ? "chevron-small-down" : "chevron-small-right"}
            size={24}
            color="white"
          />
          <Text
            style={styles.text}
            onPress={() => updateItemState(index)}
          >{`${item.Title}, ${item.Year}`}</Text>
        </View>
        {item.details ? <Details movie={item.Title} /> : null}
      </>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdbID}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    flex: 1,
    fontSize: 18,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
