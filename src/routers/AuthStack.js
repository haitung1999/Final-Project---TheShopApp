import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignIn/index';

// Create AuthStack
const AuthStack = createStackNavigator();
const authStack = () => (
  <AuthStack.Navigator initialRouteName="SignIn">
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
  </AuthStack.Navigator>
);

export default authStack;
