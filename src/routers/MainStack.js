import React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import mainTab from './MainTab';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/HeaderButton';
import Drawer from './Drawer';
import { DrawerActions } from '@react-navigation/native';
import Colors from '../constants/Colors';

// Create MainStack
const MainStack = createStackNavigator();

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const mainStack = () => (
    <MainStack.Navigator initialRouteName="Drawer" screenOptions={defaultNavOptions}>
        <MainStack.Screen
            name="DrawerScreen"
            component={Drawer}
            options={({ navigation, route }) => {
                return {
                    title: 'Hello',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item
                                title="Cart"
                                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                                onPress={() => {
                                    navigation.navigate('Cart')
                                }}
                            />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                            <Item
                                title="Menu"
                                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                                onPress={() => {
                                    navigation.dispatch(DrawerActions.openDrawer());
                                }}
                            />
                        </HeaderButtons>
                    )
                }
            }}
        />
        <MainStack.Screen name="ProductDetail" component={ProductDetailScreen} options={({ route }) => {
            return {
                headerTitle: route.params.productTitle,
                headerTitleAlign: 'center'
            };
        }} />
        <MainStack.Screen
            name="Cart"
            component={CartScreen}
            options={{
                headerTitle: 'Your Cart',
            }}
        />
    </MainStack.Navigator>
);

export default mainStack;
