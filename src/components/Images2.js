import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

//Display branco da logo na página inicial
const styles = StyleSheet.create({
  display: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row"
  }
});

export default props => (
  <View style={styles.display}>
    <Image
      style={{ width: 150, height: 155, marginLeft: 10 }}
      source={require("../img/logoUfrrj2.png")}
    />
    <Image
      style={{ width: 150, height: 150, marginRight: 10 }}
      source={require("../img/logoPet2.png")}
    />
  </View>
);
