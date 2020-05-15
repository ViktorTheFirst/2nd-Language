import { REGISTER, LOGIN } from "./const";
const youripadress = "http://192.168.0.86:5000";
//const youripadress = "https://fitness2020.herokuapp.com";

//===========================================================================================
export const login = (data) => async (dispatch) => {
  try {
    const loginToken = await fetch(`${youripadress}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!loginToken.ok) {
      const errorResData = await loginToken.json();
      let message = "Login failed";
      if (errorResData && errorResData.errors.length > 0)
        message = errorResData.errors[0].msg;
      throw new Error(message);
    }

    let jsonToken = await loginToken.json();

    dispatch({
      type: LOGIN,
      payload: { token: jsonToken.token },
    });
    return jsonToken;
  } catch (err) {
    throw err;
  }
};

//===========================================================================================
export const register = (data) => async (dispatch) => {
  try {
    const regToken = await fetch(`${youripadress}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!regToken.ok) {
      const errorResData = await regToken.json();
      let message = "Registration failed";
      if (errorResData && errorResData.errors.length > 0)
        message = errorResData.errors[0].msg;
      throw new Error(message);
    }

    let json = await regToken.json();

    dispatch({
      type: REGISTER,
      payload: { token: json.token },
    });
    return json;
  } catch (err) {
    throw err;
  }
};
