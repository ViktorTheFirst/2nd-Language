import React, { useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Test = (props) => {
  useEffect(() => {
    /* async function changeToPortrait() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }
    //activate the orientation change
    changeToPortrait();
    //clean up after exiting the component
    return async function changeToLandscape() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    }; */
  });

  return (
    <View style={styles.backgroundContainer}>
      <Text>width: {WIDTH}</Text>
      <Text>height: {HEIGHT}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Test;
