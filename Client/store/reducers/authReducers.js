import { REGISTER, LOGIN, LOGOUT } from '../actions/const';

const initialState = {
  token: '',
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  avatar: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { token: action.payload.token };

    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
