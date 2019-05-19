import React, { Component } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
  View
} from "react-native";
import ButtonCat from "./components/ButtonCat";
import axios from "axios";

export default class CatalogoProdutos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      origins: null
    };
  }
  componentDidMount() {
    this.getFromApi();
  }

  async getFromApi() {
    axios
      .get("http://10.0.2.2:8000/visualizar-alimentos", {
        headers: { Accept: "application/json" }
      })
      //função anônima (sem nome)
      .then(response => {
        const products = response.data.products;
        const origins = response.data.origins;
        this.setState({
          products,
          origins
        });
      });
    console.log("depois do axios");
  }

  shouldRendProducts() {
    if (this.state.products != null) {
      console.log(this.state.products);
      return (
        <View>
          {this.state.products.map((actualProduct, id) => {
            return <ButtonCat {...actualProduct} />;
          })}
        </View>
      );
    } else {
      return <ActivityIndicator />;
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.shouldRendProducts()}
      </ScrollView>
    );
  }
}

//Constructor -> Render -> ComponentDidMount -> ComponentWillUnmount

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
