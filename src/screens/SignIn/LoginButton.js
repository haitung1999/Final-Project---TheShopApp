import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function LoginButton({ color, textColor, icon, title, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor: color, borderWidth: !color ? 1 : 0 }]}>
            <Image style={styles.image} source={icon} />
            <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: 'red',
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        flexDirection: 'row',
    },
    image: {
        width: 20,
        height: 20
    },
    text: {
        fontWeight: 'bold',
        marginLeft: 10,
    },
})
