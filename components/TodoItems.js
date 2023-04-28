import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import CheckBox from './Checkbox';


export default function TodoItems({ item, deleteFunction }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (

        <View style={styles.container}>

            <View style={styles.item}>
                <Text >{item.text}</Text>
            </View>

            <View>
                <CheckBox />
            </View>

            <TouchableOpacity onPress={() => deleteFunction(item.id)} >
                <View style={styles.delete}>
                    <MaterialIcons size={25} color='black' name='delete' />
                </View>
            </TouchableOpacity>

        </View>



    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 2,
        margin: 5,
        marginTop: 10
    },
    item: {

        padding: 14,
        margin: 4,
        marginRight: 5,
        borderColor: '#212A3E',
        flexDirection: 'row',
        textAlign: 'left'
    },
    delete: {
        flex: 1,
        alignItems:'center',
        flexDirection: 'row',
        paddingTop:1

    }
})
