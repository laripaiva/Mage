import React from 'react'
import {
    StyleSheet, 
    View, 
    Text,
    Image
} from 'react-native'

//Display branco da logo na página inicial
const styles = StyleSheet.create({
    display:{
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center', //Alinhado à direita
        padding:20,
    },
    displayText:{
        fontSize:25,
        color:'#3E8022',
        justifyContent:'center',
    }
})

export default props => 
    <View style={styles.display}> 
        <Image style={{width: 150, height: 150, alignContent:'center'}} source={require('../img/logo.png')} />
        <Text style={styles.displayText}>
            Magé AgroFamiliar
        </Text>     
    </View>

