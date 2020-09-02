import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function SearchBar({ placeholder, onChangeText, value }) {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-search" size={24} color="#564d4d" />
      <TextInput
        style={styles.text}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    // justifyContent: "center",
    width: 280,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#564d4d",
  },
  text: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 20,
    color: "#564d4d",
  },
});
