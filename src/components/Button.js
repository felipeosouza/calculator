import React from 'react'
import { Animated, Dimensions, StyleSheet, View, Text, TouchableHighlight } from 'react-native'

export default ({onPressButton, value, color, big}) => {
    const width = Dimensions.get('window').width - Dimensions.get('window').width * 0.12
    const buttonWidth = width / big || width / 4
    const buttonHeight = width / 4
    const estilo = StyleSheet.create({
        view : {
            borderRadius : 100
        },
        button : {
            backgroundColor : color,
            opacity : 0.95,
            width : buttonWidth,
            height : buttonHeight,
            borderColor : '#0C0C0C',
            // borderWidth : width / 250,
            borderRadius : 100,
            justifyContent : 'center',
            alignItems : 'center'
        },
        txt : {
            color : 'F9F9F9',
            fontSize : width / 10,
            fontWeight : '500',
            alignSelf : 'center'
        }
    })
    
    // FUNÇÕES
    const onPress = () => {
        onPressButton(value)
    }
    const Underlay = () => {
        return (<View style={estilo.button}>
            <Text style = {estilo.txt}>{value}</Text>
        </View>
        )
    }
    return (
        <TouchableHighlight 
            style={estilo.view}
            underlayColor={'#EBEBEB'}
            onPress={onPress}>   
            <Underlay/>
        </TouchableHighlight>
    )
}

    