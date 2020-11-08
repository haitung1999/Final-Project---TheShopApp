import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/Splash';
import { useSelector } from 'react-redux';
import authStack from './AuthStack';
import mainStack from './MainStack';
import drawer from './DrawerNavigator';

export default function RootRouter() {
    const { restoring, isLoggedIn } = useSelector((store) => ({
        restoring: store.auth.restoring,
        isLoggedIn: store.auth.isLoggedIn,
    }));

    return (
        <NavigationContainer>
            {restoring ? <SplashScreen /> : !isLoggedIn ? authStack() : drawer()}
        </NavigationContainer>
    );
}