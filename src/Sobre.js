import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Images2 from "./components/Images2";

export default props => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </Text>
    <Images2 />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    padding: 5,
    borderTopWidth: 1,
    borderColor: "#a0a0a0",
    justifyContent: "space-around"
  },
  text: {
    fontSize: 14,
    color: "#303030",
    textAlign: "justify"
  }
});
