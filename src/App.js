import React, { Component } from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';

import { createAppContainer, createStackNavigator } from 'react-navigation';
import NavigationService from './config/navigationService';
import Home from './Home';
import Teste from './Teste';
import CatalogoProdutos from './CatalogoProdutos';
import CatalogoProdutores from './CatalogoProdutores';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    CatalogoProdutos: {
      screen: CatalogoProdutos,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Catálogo de Produtos'
      })
    },
    CatalogoProdutores: {
      screen: CatalogoProdutores,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Catálogo de Produtores'
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3E8022'
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        color: '#fff',
        justifyContent: 'center'
      }
    }
  }
);

const Container = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <Container
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'#f5f5f5',
//   },
//   displayText:{
//     fontSize:20,
//     color:'#fff',
//     textAlign:'center',
//     marginTop:10,
//   }
// });
