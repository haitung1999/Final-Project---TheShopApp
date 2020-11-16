import React, { useReducer, useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Keyboard, TouchableOpacity, Alert, ScrollView, ToastAndroid, Platform, SafeAreaView, Image } from 'react-native'
import LoginButton from './LoginButton';
import CustomTextInput from '../../components/UI/CustomTextInput';
import { IMAGES } from '../../assets/image/index';
import COLORS from '../../assets/colors';
import { login } from '../../redux/auth/action';
import { useDispatch } from 'react-redux'


const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        return {
            inputValues: updatedValues
        }
    }
}


const SignInScreen = ({ navigation }) => {
    const [isSignIn, setIsSignIn] = useState(false)
    const [error, setError] = useState();
    const [showLoading, setShowLoading] = useState(false);

    const dispatch = useDispatch()

    const [formState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        }
    })

    useEffect(() => {
        if (error) {
            Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
        }
    }, [error]);

    const onLoginPress = async () => {
        let action;
        if (isSignIn) {
            action = login(
                formState.inputValues.email,
                formState.inputValues.password
            )
            setError(null);
            setShowLoading(true);
            try {
                await dispatch(action);
            } catch (err) {
                setError(err.message);
                setShowLoading(false)
            }
        }
    };

    const inputChangeHandler = useCallback(
        (inputValue) => ({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
        })
    )

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView style={{ padding: 24 }} keyboardShouldPersistTaps='handled'>
                <Image source={IMAGES.ic_vigreen} style={styles.header} />
                <CustomTextInput
                    iconType="user"
                    autoCapitalize="none"
                    placeholder="Email or phone number"
                    onChangeText={inputChangeHandler}
                />

                <CustomTextInput
                    iconType="lock"
                    autoCapitalize="none"
                    placeholder="Enter your password here!"
                    secureTextEntry
                    onChangeText={inputChangeHandler}
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
                    <TouchableOpacity style={{ marginStart: 4 }} onPress={() => { navigation.navigate('Sign Up') }}>
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