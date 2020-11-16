import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignIn/index';
import SignUpScreen from '../screens/SignUp/index';
import AuthScreen from '../screens/user/AuthScreen';
import SplashScreen from '../screens/Splash';

// Create AuthStack
const AuthStack = createStackNavigator();
const authStack = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: null }} />
    <AuthStack.Screen name="Authentication" component={AuthScreen} options={() => {
      return {
        headerTitle: 'Authenticate',
        headerTitleAlign: 'center'
      }
    }} />
  </AuthStack.Navigator>
);

export default authStack;
