import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from "react-native";

import NavigationService from "../config/navigationService";

//Estilo do componente
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#2f601a",
    textAlign: "left",
    padding: 18,
    fontSize: 20,
    color: "#fff"
  }
});

export default props => {
  console.log("Display: ");
  console.log(props);
  return (
    <TouchableHighlight onPress={() => NavigationService.navigate(props.route)}>
      <View>
        <Text style={styles.button}>
          <Icon name="home" size={20} color="#fff" /> {props.label}
        </Text>
        {/* <Icon.Button name="facebook" onPress={this.loginWithFacebook} solid /> */}
      </View>
    </TouchableHighlight>
  );
};