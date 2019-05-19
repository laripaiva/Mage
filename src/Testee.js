import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";
import { Icon, Button } from "react-native-elements";

export default class Teste extends Component {
  render() {
    return (
      <ScrollView style={styles.container1}>
        <View style={styles.container2}>
          <Image style={styles.image} source={require("./img/abacaxi.png")} />
          <View style={styles.containerText}>
            <Text style={styles.textName}>Produto:</Text>
            <Text style={styles.textName}>Abacaxi</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Icon
            style={styles.icon}
            name={"user"}
            color="#000"
            type="font-awesome"
            size={40}
            padding={5}
          />
          <Text style={styles.text}>Vendedor:</Text>
          <Text style={styles.text} />
        </View>
        <View style={styles.container}>
          <Icon
            style={styles.icon}
            name={"angle-right"}
            color="#000"
            type="font-awesome"
            size={40}
            padding={5}
          />
          <Text style={styles.text}>Quantidade disponível:</Text>
          <Text style={styles.text} />
        </View>
        <View style={styles.container}>
          <Icon
            style={styles.icon}
            name={"map-marker"}
            color="#000"
            type="font-awesome"
            size={40}
            padding={5}
          />
          <Text style={styles.text}>Endereço:</Text>
          <Text style={styles.text} />
        </View>
        <Button
          title="Como Chegar"
          buttonStyle={{
            padding: 15,
            margin: 20,
            backgroundColor: "#3E8022"
          }}
          titleStyle={{
            color: "#fff",
            fontSize: 20
          }}
          icon={
            <Icon
              name="arrow-circle-right"
              size={25}
              color="white"
              type="font-awesome"
              paddingLeft={25}
            />
          }
          iconRight
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
    paddingBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#a0a0a0"
  },
  containerText: {
    flexDirection: "column"
  },
  textName: {
    fontSize: 25,
    color: "#303030"
  },
  text: {
    fontSize: 18,
    color: "#303030",
    textAlign: "left",
    paddingTop: 12,
    paddingLeft: 7
  },
  image: {
    width: 120,
    height: 120
  },
  button: {
    padding: 10
  }
});
