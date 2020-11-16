import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AL } from './action';
import { REHYDRATE } from 'redux-persist';

const initialState = {
  token: null,
  userId: null,
  didTryAutoLogin: false,
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
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
        didTryAutoLogin: true
      };
    case SET_DID_TRY_AL:
      return {
        ...state,
        didTryAutoLogin: true
      };
    case LOGOUT:
      return {
        ...initialState,
        didTryAutoLogin: true
      };
    default:
      return state;
  }
};

export default auth;
