import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const latitude = -22.89859;
const longitude = -43.187299;
export default props => (
  <View style={{ flex: 1 }}>
    <MapView
      style={[{ ...StyleSheet.absoluteFillObject }]}
      region={{
        latitude,
        longitude,
        latitudeDelta: 0.025,
        longitudeDelta: 0.025 * ASPECT_RATIO
      }}
      showsUserLocation
      // Workaround para showMyLocationButton
      // Ver: Issue #2010
      // TODO: Pq não criar showMyLocationButton manualmente?
    >
      <Marker coordinate={{ latitude: -22.89859, longitude: -43.187299 }} />
    </MapView>
  </View>
);
