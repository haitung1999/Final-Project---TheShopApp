import PRODUCTS from '../../data/product';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

const products = (state = initialState, action) => {
    return state;
};

export default products;