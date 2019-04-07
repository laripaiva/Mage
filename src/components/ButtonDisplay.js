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
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#2f601a',
    textAlign: 'left',
    padding: 18,
    fontSize: 20,
    color: '#fff'
  }
});

export default props => {
  console.log('Display: ');
  console.log(props);
  return (
    <TouchableHighlight onPress={() => NavigationService.navigate(props.route)}>
      <View>
        <Text style={styles.button}>Ola mundo </Text>
        <Icon name="facebook" color="white" type="font-awesome" />
      </View>
    </TouchableHighlight>
  );
};
