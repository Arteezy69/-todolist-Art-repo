import React, { useState } from 'react'
import { StyleSheet, Text, FlatList, TextInput, Button, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import TodoItems from './TodoItems';
import AddTodos from './AddTodos';

export default function List() {
    const [todos, setTodos] = useState([
        { text: 'Play Dota', id: '1' },
        { text: 'Sleep', id: '2' },
        { text: 'Repeat', id: '3' },
    ]);

    const SubmitHandler = (text) => {
        setTodos((prevTodos) => {
            return [
                { text: text, id: Math.random().toString() },
                ...prevTodos
            ]
        })
    }
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>

                <AddTodos submitHandler={SubmitHandler} />

                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            <TodoItems item={item} />
                        )}

                    />
                </View>


            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {

    },
    list: {
        paddingTop: 30,

        alignItems: 'center',
        fontWeight: '30',
        margin: 10,
        color: "fff"

    },


});


