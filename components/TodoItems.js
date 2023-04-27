import React from 'react'
import { StyleSheet, Text,TouchableOpacity } from 'react-native'


export default function TodoItems({item}){

    return(
        <TouchableOpacity>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )

}

const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:10,
        borderColor:'#212A3E'
    }
})
