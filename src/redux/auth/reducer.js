import { SET_LOGGED_IN } from './action';
import { REHYDRATE } from 'redux-persist';

const initialState = {
  isLoggedIn: false,
  restoring: true,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE: {
      if (!action.payload || !action.payload.auth) {
        return state;
      }
      return {
        ...action.payload.auth,
        restoring: false,
      };
    }
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      return state;
  }
};

export default auth;
