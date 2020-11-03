import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import AccountScreen from '../screens/Account';

// Create MainTab
const MainTab = createBottomTabNavigator();
const mainTab = () => (
    <MainTab.Navigator>
        <MainTab.Screen name="Home" component={ProductsOverviewScreen} options={{ title: 'All Products ' }} />
        <MainTab.Screen name="Profile" component={AccountScreen} options={{ title: 'Profile ' }} />
    </MainTab.Navigator>
);


export default mainTab;
