import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import Details from "./details";
import { Ionicons } from "@expo/vector-icons";

export default function movieList({ data, onItemPress }) {
  const updateItemState = (index) => {
    let data_copy = [...data];
    data_copy[index].details = !data[index].details;
    onItemPress(data_copy);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name={item.details ? "md-arrow-dropdown" : "md-arrow-dropright"}
            size={36}
            color="black"
          />
          <Text
            onPress={() => updateItemState(index)}
          >{`${item.Title}, ${item.Year}`}</Text>
        </View>
        {item.details ? <Details movie={item.Title} /> : null}
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Text style={{ alignSelf: "center" }}>Results</Text>
      <FlatList
        style={{ marginHorizontal: 20 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.imdbID}
      />
    </View>
  );
}
