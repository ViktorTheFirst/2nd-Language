import { REGISTER, LOGIN } from "../actions/const";

const initialState = {
  token: "",
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  avatar: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { token: action.payload.token };

    case LOGIN:
      return { token: action.payload.token };

    default:
      return state;
  }
};

export default authReducer;
