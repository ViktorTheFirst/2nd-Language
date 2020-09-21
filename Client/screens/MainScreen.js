import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Image,
} from "react-native";
const BG = require("../assets/images/main_resized3.png");
import { images } from "..//constants/imageExport";

const MainScreen = (props) => {
  return (
    <ImageBackground style={styles.backgroundContainer} source={BG}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Choose a lesson</Text>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.planetContainer}>
          <Text style={{ ...styles.headerText, fontSize: 18 }}>STORY</Text>
          <TouchableHighlight
            onPress={() => props.navigation.navigate("story")}
          >
            <Image
              source={require("../assets/images/p1.png")}
              style={styles.story}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.planetContainer}>
          <Text style={{ ...styles.headerText, fontSize: 18 }}>SENTENCE</Text>
          <TouchableHighlight
            onPress={() => props.navigation.navigate("sentence")}
          >
            <Image
              source={require("../assets/images/p2.png")}
              style={styles.sentances}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.planetContainer}>
          <Text style={{ ...styles.headerText, fontSize: 18 }}>WORDS</Text>
          <TouchableHighlight
            onPress={() => props.navigation.navigate("words")}
          >
            <Image
              source={images.mainScreenImages.words.path}
              style={styles.words}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.planetContainer}>
          <Text style={{ ...styles.headerText, fontSize: 18 }}>SOUNDS</Text>
          <TouchableHighlight
            onPress={() => props.navigation.navigate("sounds")}
          >
            <Image
              source={images.mainScreenImages.sounds.path}
              style={styles.sounds}
            />
          </TouchableHighlight>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  planetContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    //backgroundColor: "pink",
  },
  rowContainer: {
    flex: 8,
    flexDirection: "row",
    marginHorizontal: 30,
    //backgroundColor: "powderblue",
  },
  headerContainer: {
    flex: 1,
    //backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  rocketPath: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    //backgroundColor: "powderblue",
  },
  story: {
    width: 200,
    height: 99,
  },
  sentances: {
    width: 200,
    height: 143,
  },
  words: {
    width: 200,
    height: 99,
  },
  sounds: {
    width: 120,
    height: 120,
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
    //opacity: 0.75,
    //backgroundColor: "yellow",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

export default MainScreen;
