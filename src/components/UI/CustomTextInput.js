import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function CustomTextInput({ title, placeholder, onChangeText, value, secureTextEntry }) {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.inputText}
                placeholder={placeholder}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20
    },
    inputText: {
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
        height: 50,

    }
})
