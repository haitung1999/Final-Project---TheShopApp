import React, { useState } from 'react'
import { StyleSheet, Text, View, Keyboard, TouchableOpacity, Alert, ScrollView, ToastAndroid, Platform, SafeAreaView, Image } from 'react-native'
import LoginButton from './LoginButton';
import CustomTextInput from '../../components/UI/CustomTextInput';
import { IMAGES } from '../../assets/image/index';
import COLORS from '../../assets/colors';
import { setLoggedIn } from '../../redux/auth/action';
import { useDispatch } from 'react-redux'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const showAlert = (title, message, onPossitivePress) => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: 'OK',
                    onPress: onPossitivePress
                }
            ],
            { cancelable: true }
        );
    }

    const onLoginPress = () => {

        if (email.localeCompare('1') != 0) {
            showAlert("Login failed", 'Invalid email. Please try agian!')
            return;
        }

        if (password.localeCompare('1') != 0) {
            showAlert("Login failed", 'Invalid password. Please try again!')
            return;
        }

        Keyboard.dismiss()
        const successfullyMes = "Login successfully"
        if (Platform.OS === 'ios') {
            showAlert("", successfullyMes, () => {
                dispatch(setLoggedIn(true))
            })
        } else {
            ToastAndroid.show(successfullyMes, ToastAndroid.SHORT)
            dispatch(setLoggedIn(true))
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView style={{ padding: 24 }} keyboardShouldPersistTaps='handled'>
                <Image source={IMAGES.ic_vigreen} style={styles.header} />
                <CustomTextInput
                    title="Email ID"
                    placeholder="Email or phone number"
                    onChangeText={(text) => setEmail(text)}
                />

                <CustomTextInput
                    title="Password"
                    placeholder="Enter your password here!"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />

                <View style={styles.forgotContainer}>
                    <TouchableOpacity>
                        <Text style={styles.forgotPassward}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
                    <Text style={styles.loginText}>Sign In</Text>
                </TouchableOpacity>

                <Text style={styles.text1}>Or sign in with</Text>

                <View style={styles.otherLogIn}>
                    <LoginButton
                        title="Google"
                        icon={IMAGES.ic_google}
                    />
                    <View style={{ width: 10 }} />
                    <LoginButton
                        title="Facebook"
                        icon={IMAGES.ic_facebook}
                        color='#4a6ea8'
                        textColor={COLORS.white}
                    />
                </View>

                <View style={styles.signUp}>
                    <Text>Not yet a member?</Text>
                    <TouchableOpacity style={{ marginStart: 4 }}>
                        <Text style={{ color: "orange", fontWeight: "bold" }} >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 66,
        width: 66,
        alignSelf: 'center'
    },
    otherLogIn: {
        flexDirection: 'row'
    },
    forgotContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingVertical: 10,
    },
    forgotPassward: {
        fontWeight: "bold",
        color: "orange"
    },
    loginButton: {
        marginTop: 10,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: 'orange',
        borderRadius: 4,
    },
    loginText: {
        color: COLORS.white,
        textAlign: 'center',
        fontWeight: "bold",
    },
    text1: {
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    },
    signUp: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 40
    }
})

export default SignInScreen;