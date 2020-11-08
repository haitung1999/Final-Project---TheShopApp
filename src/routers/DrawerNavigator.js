import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainStackNavigator } from './MainStackNavigator';
import { OrderStackNavigator } from './MainStackNavigator';
import { UserStackNavigator } from './MainStackNavigator';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const drawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Products">
            <Drawer.Screen
                name="Products"
                component={MainStackNavigator}
                options={() => {
                    return {
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
                component={OrderStackNavigator}
                options={{
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
                component={UserStackNavigator}
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
};

export default drawer;

