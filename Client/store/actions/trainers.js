import { TOGGLE_FAVORITE } from "./const";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, trainerID: id };
};
