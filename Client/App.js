import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { enableScreens } from "react-native-screens";
import * as Font from "expo-font";
import { AppLoading } from "expo"; //prolongs app start untill fonts loaded
import LoginScreen from "./screens/LoginScreen";
import Navigator from "./navigation/navigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./store/reducers/authReducers";
import profileReducer from "./store/reducers/profileReducers";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

enableScreens(); //preformance optinization
const rootReducer = combineReducers({
  authRed: authReducer,
  profileRed: profileReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "dancing-script": require("./assets/fonts/DancingScript-Bold.ttf"),
    "averia-libre": require("./assets/fonts/AveriaLibre-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
