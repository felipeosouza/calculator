import React, { useReducer, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Display from './components/Display'
import Button from './components/Button'
import { textState, dispatch } from './components/Display'

const App = () => {
    const setDisplay = (value) => {
        dispatch({ payload: value })
    }
    const insertCharacter = (character) => {
        const text = String(textState.text)
        const newText = text.concat(character)
        if (text == 0) {
            setDisplay(character)
        } else setDisplay(newText)
    }
    const result = () => {
        try {
            const result = eval(textState.text)
            setDisplay(result.toString())
        } catch {
            clear()
        }
    }
    const clear = () => {
        setDisplay('0')
    }

    return (
        <View style={estilo.keyboard}>
            <Display text={textState.text} />
            <View style={estilo.keyboardContainer}>
                <View style={estilo.keyboardButtons}>
                    <Button onPressButton={clear} value={'AC'} color={'#424141'} big={4 / 3.21} />
                    <Button onPressButton={() => insertCharacter('/')} value={"÷"} color={'#4A71C6'} />
                </View>
                <View style={estilo.keyboardButtons}>
                    <Button onPressButton={insertCharacter} value={7} color={'#424141'} />
                    <Button onPressButton={insertCharacter} value={8} color={'#424141'} />
                    <Button onPressButton={insertCharacter} value={9} color={'#424141'} />
                    <Button onPressButton={() => insertCharacter('*')} value={'×'} color={'#4A71C6'} />
                </View>
                <View style={estilo.keyboardButtons}>
                    <Button onPressButton={insertCharacter} value={4} color={'#424141'} />
                    <Button onPressButton={insertCharacter} value={5} color={'#424141'} />
                    <Button onPressButton={insertCharacter} value={6} color={'#424141'} />
                    <Button onPressButton={insertCharacter} value={'+'} color={'#4A71C6'} />
                </View>
                <View style={estilo.keyboardButtons}>
                    <Button onPressButton={insertCharacter} value={1} color={'#424141'} />
                    <Button onPressButton={insertCharacter} value={2} color={'#424141'} />
                    <Button onPressButton={insertCharacter} value={3} color={'#424141'} />
                    <Button onPressButton={insertCharacter} value={'-'} color={'#4A71C6'} />
                </View>
                <View style={estilo.keyboardButtons}>
                    <Button onPressButton={insertCharacter} value={0} color={'#424141'} big={1.9} />
                    <Button onPressButton={() => insertCharacter('.')} value={'•'} color={'#424141'} />
                    <Button onPressButton={result} value={'='} color={'#4A71C6'} />
                </View>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    keyboard: {
        backgroundColor: '#171616',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    keyboardContainer: {
        height: '70%',
        justifyContent: 'space-evenly'
    },
    keyboardButtons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    }
})
export default App