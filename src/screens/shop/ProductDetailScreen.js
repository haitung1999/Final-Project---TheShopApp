import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

const ProductDetailScreen = ({ route }) => {
    const productId = route.params?.productId;
    console.log(productId)
    const selectedProducts = useSelector((store) =>
        store.products.availableProducts.find((prod) => prod.id === productId)
    );

    return (
        <View>
            <Text>{selectedProducts.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;


