import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { Icon } from 'react-native-elements';

import NavigationService from '../config/navigationService';

//Estilo do componente
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#2f601a',
    padding: 10
  },
  direction: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10
  },
  icon: {
    backgroundColor: 'red'
  }
});

export default props => {
  console.log('Display: ');
  console.log(props);
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => NavigationService.navigate(props.route)}
    >
      <View style={styles.direction}>
        <Icon
          style={styles.icon}
          name={props.icon || 'skull'}
          color="white"
          type="material-community"
        />
        <Text style={styles.text}>{props.label}</Text>
      </View>
    </TouchableHighlight>
  );
};
