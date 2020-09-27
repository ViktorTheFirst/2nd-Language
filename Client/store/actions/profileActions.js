import { GET_USER, UPDATE_AVATAR } from "./const";
const yourIPadress = "http://192.168.0.86:5000";

export const get_user = (email) => async (dispatch) => {
  try {
    const res = await fetch(`${yourIPadress}/api/profile/getuser/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const errorResData = await res.json();
      let message = "Something went wrong!";
      if (errorResData && errorResData.errors.length > 0)
        message = errorResData.errors[0].msg;
      throw new Error(message);
    }
    const serverData = await res.json();
    console.log("FROM SERVER from get user: ", serverData);

    dispatch({
      type: GET_USER,
      payload: serverData,
    });
  } catch (err) {
    console.log("get_user error in profileActions", err);
    throw err;
  }
};

//===========================================================================================

export const update_avatar = (email, avatarName) => async (dispatch) => {
  try {
    const res = await fetch(`${yourIPadress}/api/profile/updateavatar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ avatarName: avatarName, email: email }),
    });

    if (!res.ok) {
      const errorResData = await res.json();
      let message = "Something went wrong!";
      if (errorResData && errorResData.errors.length > 0)
        message = errorResData.errors[0].msg;
      throw new Error(message);
    }
    const serverData = await res.json();
    console.log("FROM SERVER in update avatar: ", serverData);
    dispatch({
      type: UPDATE_AVATAR,
      payload: serverData,
    });
  } catch (err) {
    console.log("update_avatar error in profileActions", err);
    throw err;
  }
};
