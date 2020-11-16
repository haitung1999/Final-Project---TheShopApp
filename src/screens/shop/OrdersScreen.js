import React, { useEffect, useState } from 'react'
import { FlatList, ActivityIndicator, View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import OrderItem from '../../components/shop/OderItem';
import { fetchOrders } from '../../redux/orders/action';
import Colors from '../../constants/Colors';

const OrdersScreen = () => {
    const [isLoading, setIsloading] = useState(false);

    const orders = useSelector(state => state.orders.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsloading(true);
        dispatch(fetchOrders()).then(() => {
            setIsloading(false);
        })
    }, [dispatch])

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        );
    }

    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <OrderItem
                    amount={itemData.item.totalAmount}
                    date={itemData.item.readableDate}
                    items={itemData.item.items}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default OrdersScreen


