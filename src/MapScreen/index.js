import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; //Inports do mapa

//Pega tamanho da tela e calculo o aspect_ratio. Latitude e Longitude de algum lugar ai...
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const latitude = -22.89859;
const longitude = -43.187299;

export default props => (
  //flex 1 para ocupar a tela toda
  <View style={{ flex: 1 }}>
    <MapView
      style={[{ ...StyleSheet.absoluteFillObject }]} //Posição absoluta ocupando a tela toda
      region={{
        latitude,
        longitude,
        latitudeDelta: 0.025, //O delta é pra calcular "o quanto de mapa aparece na tela"
        longitudeDelta: 0.025 * ASPECT_RATIO
      }}
      showsUserLocation
    >
      <Marker
        pinColor="#3E8022"
        coordinate={{ latitude: -22.89859, longitude: -43.187299 }}
      />
    </MapView>
  </View>
);
