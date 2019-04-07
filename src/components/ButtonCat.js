import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from "react-native";

import NavigationService from "../config/navigationService";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 20
    // height: Dimensions.get("window").width / 5
  },
  text: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 10
  }
});

export default props => {
  console.log("Display: ");
  console.log(props);
  return (
    <TouchableHighlight>
      <View style={styles.button}>
        <Text>oi</Text>
      </View>
    </TouchableHighlight>
  );
};
