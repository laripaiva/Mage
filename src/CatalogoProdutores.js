import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import ButtonCat from "./components/ButtonCat";

export default class CatalogoProdutores extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {<ButtonCat route="Teste" />}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttons: {
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#2f601a",
    backgroundColor: "#f5f5f5",
    textAlign: "left",
    padding: 38,
    fontSize: 20,
    color: "#fff"
  }
});
