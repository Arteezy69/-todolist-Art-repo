import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Navbar = (props) => {

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