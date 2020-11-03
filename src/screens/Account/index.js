import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { setLoggedIn } from '../../redux/auth/action';
import { useDispatch } from 'react-redux'

export default function AccountScreen() {
    const dispatch = useDispatch();
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header} />
            <Image style={styles.avatar} source={require('../../assets/image/avatar.jpg')} />
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>Tùng Nguyễn</Text>
                    <Text style={styles.status}>Learning React Native</Text>
                    <Text style={styles.description}>I'm currrently learning React Native for developer mobile app</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => dispatch(setLoggedIn(false))}>
                        <Text style={styles.logoutText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: 'red',
        height: 160
    },
    avatar: {
        height: 130,
        width: 130,
        borderRadius: 4,
        borderWidth: 4,
        borderRadius: 64,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 90,
    },
    body: {
        marginTop: 40
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    status: {
        color: 'red',
        fontSize: 16,
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: '#696969',
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutButton: {
        paddingVertical: 8,
        paddingStart: 16,
        paddingEnd: 16,
        backgroundColor: 'orange',
        borderRadius: 20
    },
    logoutText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
