import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default props => (
  // <ScrollView>
  //   <View>
  //     <Text style={styles.text}>vai se fude</Text>
  //   </View>
  // </ScrollView>
  <View>
    <Text style={styles.text}>vai se fude</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 120,
    color: "#fff",
    marginLeft: 10
  }
});
