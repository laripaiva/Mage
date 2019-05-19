import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button
} from "react-native";

import NavigationService from "../config/navigationService";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    flexGrow: 1,
    borderBottomWidth: 1,
    borderColor: "#a0a0a0",
    padding: 10,
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "#a0a0a0",
    marginTop: 8,
    marginLeft: 0
  },
  icon: {
    alignContent: "flex-end",
    marginTop: 55,
    marginLeft: 10
  },
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  }
});

export default props => {
  console.log("Display: ");
  console.log("localhost:8000/storage/" + props.arquivo);

  return (
    <TouchableOpacity onPress={() => NavigationService.navigate(props.route)}>
      <View style={styles.button}>
        <Image
          style={{ width: 60, height: 60 }}
          source={{ uri: "http://10.0.2.2:8000/storage/" + props.arquivo }}
        />
        <View style={styles.view}>
          <Text style={styles.text}>{props.nome}</Text>
          <Icon
            style={styles.icon}
            name={props.icon || "angle-right"}
            color="#a0a0a0"
            type="font-awesome"
            size={40}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
