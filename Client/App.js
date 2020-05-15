import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { enableScreens } from "react-native-screens";
import * as Font from "expo-font";
import { AppLoading } from "expo"; //prolongs app start untill fonts loaded
import Navigator from "./navigation/Navigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import trainersReducer from "./store/reducers/trainersReducer";
import authReducers from "./store/reducers/authReducers";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

enableScreens(); //preformance optinization

const rootReducer = combineReducers({
  trainersRed: trainersReducer,
  authRed: authReducers,
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
