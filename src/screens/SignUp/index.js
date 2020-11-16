import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native'

import { signup } from '../../redux/auth/action';
import CustomTextInput from '../../components/UI/CustomTextInput';
import SignUpButton from './SignUpButton';
import firebase from '../../environments/firebase';
import auth from '@react-native-firebase/auth';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    'Setting a timer',
]);

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();

    const authHandler = async () => {
        let action;
        action = signup(email, password);
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(action)
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    }

    return (
        <ScrollView style={styles.scrollview} keyboardShouldPersistTaps='handled'>

            <View style={styles.container}>
                <Text style={styles.text}>Create an account</Text>

                <CustomTextInput
                    value={email}
                    placeholder="Email"
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <CustomTextInput
                    value={password}
                    placeholder="Password"
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    iconType="lock"
                    secureTextEntry
                />

                <CustomTextInput
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    iconType="lock"
                    secureTextEntry
                />

                <SignUpButton
                    buttonTitle="Sign Up"
                    onPress={authHandler}
                />

                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => navigation.navigate('Sign In')}>
                    <Text style={styles.navButtonText}>Have an account? Sign In</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: '#f9fafd',
        padding: 24,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
});

export default SignUpScreen


