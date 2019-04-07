import React from 'react';
import{
    StyleSheet,
    Text,
    Dimensions, 
    View,
    TouchableHighlight
} from 'react-native';

//Estilo do Componente Verde
const styles = StyleSheet.create({
    display: {
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
        backgroundColor: '#3E8022',
        flexDirection: 'row',
        alignContent:'center'
    },
    button:{
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
    }
})

//O que o componente BUTTON irá imprimir 
export default props => 
    <View style={styles.display}>
        <View style={{width: 120, height: 120, backgroundColor: 'powderblue',margin:10}} />
        <View style={{width: 120, height: 120, backgroundColor: 'skyblue',margin:10}} />
    </View>