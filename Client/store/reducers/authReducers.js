import { REGISTER } from "../actions/const";

const initialState = {
  token: "",
  email: "",
  name: "",
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      console.log(action.type);
      return { token: action.payload.token };

    default:
      return state;
  }
};

export default authReducers;
