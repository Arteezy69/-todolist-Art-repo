import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-web';

const Navbar = (props) => {
    const [todos, setTodos] = useState([
        { text: 'Art', id: '1' },
        { text: 'Alvin', id: '2' },
        { text: 'Pong', id: '3' },
    ]);

    return (
        <View style={styles.navbar}>
            <Text style={styles.title}>
                To Do List
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#0A4D68',
        paddingTop:15,
        
        paddingBottom:10,
        color: "#F3F3F1"

    },
    title: {
        textAlign: 'center',
        margin: 20,
        alignItems: 'center',
        color: "#F3F3F3",


    }

});


export default Navbar