import { REGISTER, LOGIN, GET_PROFILE } from "../actions/const";

const initialState = {
  token: "",
  email: "",
  name: "",
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { token: action.payload.token };

    case LOGIN:
      return { token: action.payload.token };

    case GET_PROFILE:
      return {
        token: state.token,
        email: action.payload.email,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default authReducers;
