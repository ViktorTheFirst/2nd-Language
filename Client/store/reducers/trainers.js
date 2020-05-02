import { TRAINERS } from "..//..//data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/trainers";

const initialState = {
  trainers: TRAINERS,
  favoriteTrainers: [],
};

//state - current state snapshot
//action - every time a new action is dispached the reducer is executed
const trainersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      existingIndex = state.favoriteTrainers.findIndex(
        (tr) => tr.id === action.trainerID
      );
      if (existingIndex >= 0) {
        //if trainer is already favorite
        const updatedFavTrainers = [...state.favoriteTrainers]; //copy the favTr array
        updatedFavTrainers.splice(existingIndex, 1); // update it by removing the existing trainer
        return { ...state, favoriteTrainers: updatedFavTrainers }; //store new array in the state
      } else {
        //console.log("inside the else of the reducer");
        const trainerToAdd = state.trainers.find(
          (tr) => tr.id === action.trainerID
        );
        return {
          ...state,
          favoriteTrainers: state.favoriteTrainers.concat(trainerToAdd),
        };
      }
    default:
      return state;
  }
};

export default trainersReducer;
