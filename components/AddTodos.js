import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity } from 'react-native'


export default function AddTodos({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value);
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Add' color='#0A4D68' />
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
       
        



    }
})
