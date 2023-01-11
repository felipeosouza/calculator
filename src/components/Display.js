import React from 'react'
import { Dimensions, ScrollView, Text, StyleSheet, View } from 'react-native'

const Display = ({text}) => {
    const width = Dimensions.get('window').width
    const estilo = StyleSheet.create({
        container : {
            flex : 1,
            width : '100%',
            backgroundColor : 'transparent',
            justifyContent : 'center',
            alignItems : 'flex-end',
        },
        display : {
            height : '100%',
            flexDirection : 'row-reverse',
            backgroundColor : '#171616',
            // justifyContent : 'center',
            alignItems : 'center'
        },
        txt : {
            color : 'F9F9F9',
            fontSize : width / 5,
            fontWeight : '500',
            marginRight : 5,
        }
    })
    return (
        <View style={estilo.container}>
            <ScrollView contentContainerStyle={estilo.display} horizontal>
                <Text style={estilo.txt}>{text}</Text>
            </ScrollView>
        </View>
    )
}

export default Display