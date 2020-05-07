import { TOGGLE_FAVORITE } from "./const";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, trainerID: id };
};

/* export const login = (data) => async (dispatch) =>{
  try{
    const res = await fetch(`${youripadress}/api/auth/login`)
  } */
//}
