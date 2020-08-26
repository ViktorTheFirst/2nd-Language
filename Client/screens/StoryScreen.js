import React, { useState, Component } from "react";
import {
  Animated,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  PanResponder,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";

import imageBG from "../assets/images/17.png";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
import { Audio } from "expo-av";
import { images } from "../constants/imageExport";

export default class StoryScreen extends Component {
  render() {
    return (
      <ImageBackground source={imageBG} style={styles.backgroundContainer}>
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          STORY SCREEN
        </Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
  },
});
