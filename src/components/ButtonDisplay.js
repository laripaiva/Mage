import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import NavigationService from "../config/navigationService";

//Estilo do componente
const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#2f601a",
    padding: 15
  },
  direction: {
    flex: 1,
    flexDirection: "row"
  },
  text: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 10
  },
  icon: {
    backgroundColor: "red"
  }
});

export default props => {
  console.log("Display: ");
  console.log(props);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => NavigationService.navigate(props.route)}
    >
      <View style={styles.direction}>
        <Icon
          style={styles.icon}
          name={props.icon || "info-circle"}
          color="white"
          type="font-awesome"
        />
        <Text style={styles.text}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
};
