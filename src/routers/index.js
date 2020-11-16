import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/Splash';
import { useSelector } from 'react-redux';
import authStack from './AuthStack';
import drawer from './DrawerNavigator';

export default function RootRouter() {
    const isAuth = useSelector(state => !!state.auth.token);
    const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

    return (
        <NavigationContainer>
            {!isAuth ? authStack() : drawer()}
        </NavigationContainer>
    );
}