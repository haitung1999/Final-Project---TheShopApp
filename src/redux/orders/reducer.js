import { ADD_ORDER } from './action';
import Order from '../../data/order';

const initialState = {
    orders: []
};

const orders = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(
                new Date().toString(),
                action.orderData.items,
                action.orderData.amount,
                new Date()
            );
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };
    }

    return state;
}

export default orders;