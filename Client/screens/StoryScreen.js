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

import imageBG from "../assets/images/19.png";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
import { Audio } from "expo-av";
import { images2 } from "../constants/imageExport";
import { sounds } from "../constants/soundExport";

export default class StoryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessonNum: props.navigation.getParam("lesson"),
      qSoundName: props.navigation.getParam("qSound"), //one_two_three
      qSound: sounds[props.navigation.getParam("qSound")], // require("../assets/sounds/one_two_three.mp3")
      storyImage: images2[props.navigation.getParam("qSound")],
    };
  }

  async componentDidMount() {
    this.storySound = new Audio.Sound();
    try {
      Audio.setIsEnabledAsync(true);
      Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
      });

      this.storySound.loadAsync(
        this.state.qSound,
        {
          shouldPlay: false,
          volume: 1.0,
          shouldCorrectPitch: true,
          isLooping: false,
        },
        true
      );
    } catch (err) {
      console.log("error loading sounds", err);
    }
  }

  async componentWillUnmount() {
    this.storySound.unloadAsync();
    // returns NULL when escapes component, no longer holds data in memmory
    this.setState = (state, callback) => {
      return;
    };
  }

  playStory = async () => {
    try {
      await this.storySound.playAsync();
      await this.storySound.setPositionAsync(0);
    } catch (err) {
      console.log("Cant play story", err);
    }
  };

  render() {
    return (
      <ImageBackground style={styles.backgroundContainer} source={imageBG}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Story Lesson {this.state.lessonNum}
          </Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.imageAndTextContainer}>
            <View style={styles.imageContainer}>
              <Image source={this.state.storyImage} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <TouchableOpacity onPress={this.playStory.bind(this)}>
                <Text>{this.state.qSoundName}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.recordingStar}>
            <Text>RECORDING STAR HERE</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "pink",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "purple",
  },
  grid: {
    flexDirection: "column",
    flex: 9,
    //backgroundColor: "blue",
  },
  imageAndTextContainer: {
    flexDirection: "row",
    flex: 5,
    //backgroundColor: "gray",
    width: WIDTH - 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "orange",
  },
  recordingStar: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 280,
    height: 150,
    borderColor: "white",
    borderWidth: 6,
  },
});
