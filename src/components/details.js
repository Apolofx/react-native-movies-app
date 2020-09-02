import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { fetchDetails } from "../helpers/fetchAPI";

export default function Details({ movie }) {
  const URL = `http://www.omdbapi.com/?apikey=5eec5adc&t=${movie}`;
  const [isLoading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  //abstraer este bloque, ()=>(url, callback)
  const fetchData = async (url) => {
    try {
      const res = await fetchDetails(url);
      setDetails(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  const RenderDetails = ({ details }) => {
    const fields = Object.keys(details);
    return fields.map((field, index) => (
      <View key={index} style={styles.textContainer}>
        <Text style={[styles.title, styles.text]}>{`${field}: `}</Text>
        <Text style={styles.text}>{`${details[field]}`}</Text>
      </View>
    ));
  };
  return (
    <View>
      {isLoading ? <ActivityIndicator /> : null}
      <ScrollView style={{ marginHorizontal: 18 }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={
              details.Poster !== "N/A"
                ? {
                    uri: `${details.Poster}`,
                  }
                : require("../../assets/no-image.jpg")
            }
          />
        </View>
        <RenderDetails details={details} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { height: 300, resizeMode: "contain", zIndex: 0 },
  imageContainer: {
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 30,
  },
  text: {
    color: "white",
  },
  title: { fontWeight: "600" },
  textContainer: { flexDirection: "row", flexWrap: "wrap" },
});
