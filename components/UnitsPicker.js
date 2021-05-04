import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
    return (
        <View style={styles.unitsSystem}>
            <Picker selectedValue={unitsSystem} onValueChange={(item) => setUnitsSystem(item)} mode="dropdown" itemStyle={{fontSize: 20}}>
                <Picker.Item label='C⁰' value='metric'/>
                <Picker.Item label='F⁰' value='imperial'/>
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    unitsSystem: {
        // position: 'fixed',
        ...Platform.select({
            ios: {
                top: -20,
            },
            android: {
                top: 20,
            },
        }),
        height: 50,
        width: 50,
        textAlign: 'center',
        justifyContent: 'center'
    }
})