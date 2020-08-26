import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from "react-native";
import bgImage from "../assets/images/main_resized3.png";
import { images } from "..//constants/imageExport";

const MainScreen = (props) => {
  return (
    <ImageBackground style={styles.backgroundContainer} source={bgImage}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Choose a lesson</Text>
      </View>
      <View style={styles.columnsContainer}>
        <View style={styles.planetContainer}>
          <TouchableHighlight
            onPress={() => props.navigation.navigate("story")}
          >
            <Image
              source={require("../assets/images/p1.png")}
              style={styles.story}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => props.navigation.navigate("sentence")}
          >
            <Image
              source={require("../assets/images/p2.png")}
              style={styles.sentances}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => props.navigation.navigate("words")}
          >
            <Image
              source={images.mainScreenImages.words.path}
              style={styles.words}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => props.navigation.navigate("sounds")}
          >
            <Image
              source={images.mainScreenImages.sounds.path}
              style={styles.sounds}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.titleContainer}>
          <Text style={{ ...styles.headerText, fontSize: 18 }}>STORY</Text>
          <Text
            style={{
              ...styles.headerText,
              fontSize: 16,
              color: "black",
            }}
          >
            SENTANCE
          </Text>
          <Text style={{ ...styles.headerText, fontSize: 18, color: "black" }}>
            WORDS
          </Text>
          <Text style={{ ...styles.headerText, fontSize: 18 }}>SOUNDS</Text>
        </View>
        <View style={styles.rocketPath}>
          {/* <Text>stop4</Text> //sign where the rocket will stop 
          <Text>stop3</Text>
          <Text>stop2</Text>
          <Text>stop1</Text> */}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  planetContainer: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    //backgroundColor: "pink",
  },
  columnsContainer: {
    flex: 8,
    flexDirection: "row",
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
  titleContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",

    //backgroundColor: "gray",
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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

export default MainScreen;
