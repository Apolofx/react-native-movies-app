import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
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
      <Text key={index}>{`${field}: ${details[field]}`}</Text>
    ));
  };
  return (
    <View>
      {isLoading ? <ActivityIndicator /> : null}
      <ScrollView>
        <RenderDetails details={details} />
      </ScrollView>
    </View>
  );
}
