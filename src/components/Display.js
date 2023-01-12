import React, { useReducer, useRef } from 'react'
import { Dimensions, ScrollView, Text, StyleSheet, View } from 'react-native'

const initialValue = {
    text : '0'
}
const reducer = (state, action) => {
    return {
        text : action.payload
    }
}

var textState = initialValue
var dispatch;

const Display = () => {
    [ textState, dispatch ] = useReducer(reducer, initialValue)
    const scrollView = useRef()
    const width = Dimensions.get('window').width
    const estilo = StyleSheet.create({
        scrollView : {
            //width : '100%',
            transform : [{
                scaleX : -1
            }]
        },
        display : {
            height : '100%',
            paddingLeft : 15,
            alignItems : 'flex-end',
            //alignSelf : 'flex-start'
        },
        txt : {
            color : '#F9F9F9',
            fontSize : width / 5,
            fontWeight : '500',
            transform : [{
                scaleX : -1
            }]
        },
        container : {
            height : '100%',
            width : '100%',
            alignItems : 'flex-end',
            paddingRight : 2
        }
    })
    return (
        <View style={estilo.container}>
            <ScrollView 
                style={estilo.scrollView} 
                contentContainerStyle={estilo.display}
                ref={scrollView}
                horizontal
                overScrollMode='never'
                onContentSizeChange={()=> {
                    scrollView.current.scrollTo({y : 0, animated : false})
                }}
            >
                <Text style={estilo.txt}>{textState.text}</Text>
            </ScrollView>
        </View>
   )
}

export { textState, dispatch }
export default Display