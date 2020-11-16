import { ADD_ORDER, SET_ORDER } from './action';
import Order from '../../data/order';

const initialState = {
    orders: []
};

const orders = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER:
            return {
                orders: action.orders
            }
        case ADD_ORDER:
            const newOrder = new Order(
                action.orderData.id,
                action.orderData.items,
                action.orderData.amount,
                action.orderData.date
            );
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };
    }

    return state;
}

export default orders;