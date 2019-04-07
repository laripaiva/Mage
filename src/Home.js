import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';
import DisplayLogo from './components/DisplayLogo';
import ButtonDisplay from './components/ButtonDisplay';
import Images from './components/Images';

export default class Home extends Component {
  render() {
    console.log('Home: ');
    console.log(this.props);
    console.log('------');
    return (
      <View style={styles.container}>
        <DisplayLogo />
        <ButtonDisplay label="Catálogo de Produtos" route="CatalogoProdutos" />
        <ButtonDisplay
          label="Catálogo de Produtores"
          route="CatalogoProdutores"
        />
        <ButtonDisplay label="Sobre" route="Teste" />
        <Text style={styles.displayText}> Desenvolvedores: </Text>
        <Images />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E8022'
  },
  displayText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10
  },
  buttons: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#2f601a',
    backgroundColor: '#f5f5f5',
    textAlign: 'left',
    padding: 38,
    fontSize: 20,
    color: '#fff'
  }
});

// const AppNavigator = StackNavigator({
//   screen1: { screen: screen1 },
//   screen2: { screen: screen2 }
// });
