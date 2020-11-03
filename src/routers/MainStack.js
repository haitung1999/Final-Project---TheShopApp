import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import mainTab from './MainTab';

// Create MainStack
const MainStack = createStackNavigator();
const mainStack = () => (
    <MainStack.Navigator initialRouteName="MainTab">
        <MainStack.Screen name="Main Tab" component={mainTab} options={{ headerTitle: 'All Product' }} />
        <MainStack.Screen name="ProductDetail" component={ProductDetailScreen} options={({ route }) => {
            return {
                headerTitle: route.params?.productTitle
            };
        }} />
    </MainStack.Navigator>
);

export default mainStack;
