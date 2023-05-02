import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function CheckBox() {

    const [isChecked, setChecked] = useState(false);



    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 5

    },
    section: {
        paddingTop: 10,
        flexDirection: 'row',

    },

});
