import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import CartScreen from '../screens/shop/CartScreen';

import { DrawerActions } from '@react-navigation/native';
import CustomHeaderButton from '../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const MainStack = createStackNavigator();
const OrderStack = createStackNavigator();
const UserStack = createStackNavigator();

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

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator initialRouteName="Products" screenOptions={defaultNavOptions}>
            <MainStack.Screen name="Products"
                component={ProductsOverviewScreen}
                options={({ navigation, route }) => {
                    return {
                        title: 'All Products',
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                                <Item
                                    title="Cart"
                                    iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                                    onPress={() => {
                                        navigation.navigate('CartScreen')
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
                name="CartScreen"
                component={CartScreen}
                options={{
                    headerTitle: 'Your Cart',
                }}
            />
        </MainStack.Navigator>
    )
}

const OrderStackNavigator = () => {
    return (
        <OrderStack.Navigator>
            <OrderStack.Screen
                name="Orders"
                component={OrdersScreen}
                options={({ navigation }) => {
                    return {
                        headerTitle: 'Your Order',
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
        </OrderStack.Navigator>
    )
}

const UserStackNavigator = () => {
    return (
        <UserStack.Navigator>
            <UserStack.Screen
                name="User"
                component={UserProductsScreen}
                options={({ navigation }) => {
                    return {
                        headerTitle: 'Your Products',
                        drawerIcon: drawerConfig => (
                            <Ionicons
                                name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                                size={23}
                                color={drawerConfig.tintColor}
                            />
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
                        ),
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                                <Item
                                    title="Add"
                                    iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                                    onPress={() => {
                                        navigation.navigate('EditProduct');
                                    }}
                                />
                            </HeaderButtons>
                        )
                    }
                }}
            />
        </UserStack.Navigator>
    )
}

export { MainStackNavigator, OrderStackNavigator, UserStackNavigator }


