import { GET_USER, UPDATE_AVATAR, UPDATE_PROGRESS } from "../actions/const";

const initialState = {
  token: "",
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  avatar: "no avatar selected yet",
  progress: {
    soundLvl: 1,
    wordLvl: 1,
    sentenceLvl: 1,
    storyLvl: 1,
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        age: action.payload.user.age,
        email: action.payload.user.email,
        avatar: action.payload.user.avatar,
        firstName: action.payload.user.firstName,
        lastName: action.payload.user.lastName,
        progress: {
          soundLvl: action.payload.user.progress.soundLevel,
          wordLvl: action.payload.user.progress.wordLevel,
          sentenceLvl: action.payload.user.progress.sentenceLevel,
          storyLvl: action.payload.user.progress.storyLevel,
        },
      };
    case UPDATE_AVATAR:
      return {
        ...state,
        age: action.payload.user.age,
        email: action.payload.user.email,
        avatar: action.payload.user.avatar,
        firstName: action.payload.user.firstName,
        lastName: action.payload.user.lastName,
        progress: {
          soundLvl: action.payload.user.progress.soundLevel,
          wordLvl: action.payload.user.progress.wordLevel,
          sentenceLvl: action.payload.user.progress.sentenceLevel,
          storyLvl: action.payload.user.progress.storyLevel,
        },
      };
    case UPDATE_PROGRESS:
      return {
        ...state,
        progress: {
          soundLvl: action.payload.user.progress.soundLevel,
          wordLvl: action.payload.user.progress.wordLevel,
          sentenceLvl: action.payload.user.progress.sentenceLevel,
          storyLvl: action.payload.user.progress.storyLevel,
        },
      };
    default:
      return state;
  }
};

export default profileReducer;
