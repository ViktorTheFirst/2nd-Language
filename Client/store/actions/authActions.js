import { REGISTER } from "./const";
const youripadress = "http://localhost:5000";

export const register = (data) => async (dispatch) => {
  console.log("data in authActions:", data);
  try {
    const res = await fetch(`${youripadress}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("res in authActions:", res);
    if (!res.ok) {
      const errorResData = await res.json();
      let message = "Something went wrong!";
      if (errorResData && errorResData.errors.length > 0)
        message = errorResData.errors[0].msg;
      throw new Error(message);
    }

    let json = await res.json();
    console.log("json from actions:", json);
    dispatch({
      type: REGISTER,
      payload: { token: json.token },
    });
    return json;
  } catch (err) {
    throw err;
  }
};
