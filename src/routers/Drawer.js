import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OrdersScreen from '../screens/shop/OrdersScreen';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const Drawer = createDrawerNavigator();

const drawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Products"
        >
            <Drawer.Screen
                name="Products"
                component={ProductsOverviewScreen}
                options={() => {
                    return {
                        title: 'All Products',
                        headerTitleAlign: 'center',
                        drawerIcon: drawerConfig => (
                            <Ionicons
                                name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                                size={23}
                                color={drawerConfig.tintColor}
                            />
                        )
                    }
                }}
            />
            <Drawer.Screen
                name="Orders"
                component={OrdersScreen}
                options={{
                    headerTitle: 'Your Order',
                    drawerIcon: drawerConfig => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                            size={23}
                            color={drawerConfig.tintColor}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="User"
                component={UserProductsScreen}
                options={{
                    headerTitle: 'Your Products',
                    drawerIcon: drawerConfig => (
                        <Ionicons
                            name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                            size={23}
                            color={drawerConfig.tintColor}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}

export default drawer;