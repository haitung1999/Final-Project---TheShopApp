import auth from './auth/reducer';
import products from './products/reducer'
import cart from './cart/reducer';
import orders from './orders/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    products,
    auth,
    cart,
    orders,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

export default { store, persistor };