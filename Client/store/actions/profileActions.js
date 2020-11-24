import { GET_USER, UPDATE_AVATAR, UPDATE_PROGRESS } from './const';
const yourIPadress = 'http://192.168.0.87:5000';

export const get_user = (email) => async (dispatch) => {
  try {
    const res = await fetch(`${yourIPadress}/api/profile/getuser/${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      const errorResData = await res.json();
      let message = 'Something went wrong!';
      if (errorResData && errorResData.errors.length > 0)
        message = errorResData.errors[0].msg;
      throw new Error(message);
    }
    const serverData = await res.json();

    dispatch({
      type: GET_USER,
      payload: serverData,
    });
  } catch (err) {
    console.log('get_user error in profileActions', err);
    throw err;
  }
};

//===========================================================================================

export const update_avatar = (email, avatarName) => async (dispatch) => {
  try {
    const res = await fetch(`${yourIPadress}/api/profile/updateavatar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ avatarName: avatarName, email: email }),
    });

    if (!res.ok) {
      const errorResData = await res.json();
      let message = 'Something went wrong!';
      if (errorResData && errorResData.errors.length > 0)
        message = errorResData.errors[0].msg;
      throw new Error(message);
    }
    const serverData = await res.json();
    dispatch({
      type: UPDATE_AVATAR,
      payload: serverData,
    });
  } catch (err) {
    console.log('update_avatar error in profileActions', err);
    throw err;
  }
};

//===========================================================================================

export const update_progress = (email, title, lesson) => async (dispatch) => {
  try {
    const res = await fetch(`${yourIPadress}/api/profile/updateprogress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        lessonType: title,
        lessonNum: lesson,
        email: email,
      }),
    });

    if (!res.ok) {
      const errorResData = await res.json();
      let message = 'Something went wrong!';
      if (errorResData && errorResData.errors.length > 0)
        message = errorResData.errors[0].msg;
      throw new Error(message);
    }
    const serverData = await res.json();
    dispatch({
      type: UPDATE_PROGRESS,
      payload: serverData,
    });
  } catch (err) {
    console.log('update_progress error in profileActions', err);
    throw err;
  }
};
