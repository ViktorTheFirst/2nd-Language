import { GET_PROFILE } from "./const";
const youripadress = "http://192.168.0.86:5000";
//const youripadress = "https://fitness2020.herokuapp.com";

//===========================================================================================

export const getprofile = () => async (dispatch, getState) => {
  try {
    const token = getState().authRed.token;
    console.log("token in getprofile:", token);
    const res = await fetch(`${youripadress}/api/profile/getprofile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "auth-token": token,
      },
    });

    const serverData = await res.json();
    console.log("serverData in profileActions:", serverData);
    if (!res.ok) {
      const message = "profileActions error";
      if (serverData) message = serverData.msg;
      throw new Error(message);
    }
    dispatch({
      type: GET_PROFILE,
      payload: {
        name: serverData.user.name,
        email: serverData.user.email,
      },
    });
    return serverData;
  } catch (err) {
    throw err;
  }
};
