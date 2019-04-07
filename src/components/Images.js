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
        alignContent:'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }
})

export default props => 
    <View style={styles.display}> 
        <Image style={{width: 90, height: 90, marginRight:30, marginTop:10}} source={require('../img/logoPet.png')} />
        <Image style={{width: 90, height:90 , marginLeft:30, marginTop:10}} source={require('../img/logoUfrrj.png')} />
    </View>
