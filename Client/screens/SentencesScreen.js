import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  PanResponder,
  Animated,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import imageBG from "../assets/images/15.png";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
import { Audio } from "expo-av";
import { images } from "../constants/imageExport";

export default class SentencesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showQuestion: false,
      readyToFly1: false,
      readyToFly2: false,
      readyToFly3: false,
      fly1: false,
      fly2: false,
      fly3: false,
      answer1: images.sentanceScreenImages.answer1.path1,
      answer2: images.sentanceScreenImages.answer2.path1,
      answer3: images.sentanceScreenImages.answer3.path1,
      showDraggable: true,
      dropZoneValues: null,
      pan1: new Animated.ValueXY(),
      pan2: new Animated.ValueXY(),
      pan3: new Animated.ValueXY(),
      correct: false,
      incorrect: false,
    };
    //----------------------------------PAN 1-----------------------------------------------
    this.panResponder1 = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan1.x,
          dy: this.state.pan1.y,
        },
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropZone(gesture)) {
          this.setState({
            showDraggable: false,
          });
        } else {
          Animated.spring(this.state.pan1, { toValue: { x: 0, y: 0 } }).start();
        }
      },
    });
    //----------------------------------PAN 2-----------------------------------------------
    this.panResponder2 = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan2.x,
          dy: this.state.pan2.y,
        },
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropZone(gesture)) {
          this.setState({
            showDraggable: false,
          });
        } else {
          Animated.spring(this.state.pan2, { toValue: { x: 0, y: 0 } }).start();
        }
      },
    });
    //----------------------------------PAN 3-----------------------------------------------
    this.panResponder3 = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan3.x,
          dy: this.state.pan3.y,
        },
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropZone(gesture)) {
          this.setState({
            showDraggable: false,
          });
        } else {
          Animated.spring(this.state.pan3, { toValue: { x: 0, y: 0 } }).start();
        }
      },
    });
  }

  async componentDidMount() {
    this.questionSound = new Audio.Sound();

    try {
      this.questionSound.loadAsync(
        require("..//assets/sounds/monkeyMP3.mp3"),
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
    Audio.setIsEnabledAsync(true);
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
    });
  }

  async componentWillUnmount() {
    this.questionSound.unloadAsync();
  }

  playQuestion = async () => {
    try {
      this.questionSound.playAsync();
      this.setState({ showQuestion: !this.state.showQuestion });
      setTimeout(() => {
        this.setState({ showQuestion: !this.state.showQuestion });
      }, 1000);
      this.questionSound.setPositionAsync(0);
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };

  playAnswer1 = async () => {
    try {
      if (this.state.readyToFly1) {
        //second click - show rocket and fly
        this.setState({ fly1: true });
        setTimeout(() => {
          //fly the rocket after 1 second
          Animated.timing(this.state.pan1, {
            toValue: { x: -320, y: 100 },
            duration: 2000,
          }).start();
        }, 1000);
      }
      this.setState({ readyToFly1: true }); //first click - show picture of sentence
      this.setState({ answer1: images.sentanceScreenImages.answer1.path2 });
    } catch (err) {
      console.log("Can't manage answer 1", err);
    }
  };

  playAnswer2 = async () => {
    try {
      if (this.state.readyToFly2) {
        //second click - show rocket and fly
        this.setState({ fly2: true });
        setTimeout(() => {
          //fly the rocket after 1 second
          Animated.timing(this.state.pan2, {
            toValue: { x: -320, y: -10 },
            duration: 2000,
          }).start();
        }, 1000);
      }
      this.setState({ readyToFly2: true });
      this.setState({ answer2: images.sentanceScreenImages.answer2.path2 });
    } catch (err) {
      console.log("Can't manage answer 2", err);
    }
  };

  playAnswer3 = async () => {
    try {
      if (this.state.readyToFly3) {
        //second click - show rocket and fly
        this.setState({ fly3: true });
        setTimeout(() => {
          //fly the rocket after 1 second
          Animated.timing(this.state.pan3, {
            toValue: { x: -320, y: -140 },
            duration: 2000,
          }).start();
        }, 1000);
      }
      this.setState({ readyToFly3: true });
      this.setState({ answer3: images.sentanceScreenImages.answer3.path2 });
    } catch (err) {
      console.log("Can't manage answer 3", err);
    }
  };

  isDropZone(gesture) {
    const dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setDropZoneValues(event) {
    this.setState({
      dropZoneValues: event.nativeEvent.layout,
    });
  }

  render() {
    return (
      <ImageBackground source={imageBG} style={styles.backgroundContainer}>
        {/* ---------------------------HEADER----------------------------------------------- */}
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Text style={styles.headerText}>Sentence Lesson 1</Text>
        </View>
        <View style={styles.grid}>
          {/* ---------------------------QUESTION----------------------------------------------- */}
          <View
            onLayout={this.setDropZoneValues.bind(this)}
            style={styles.questionContainer}
          >
            <View style={styles.freeSpace} />

            <View style={styles.questionImageAndPopup}>
              <View style={styles.questionPopup}>
                {this.state.showQuestion && (
                  <Text style={styles.questionText}>MONKEY</Text>
                )}
              </View>
              <TouchableOpacity
                onPress={this.playQuestion.bind(this)}
                style={styles.questionImageContainer}
              >
                <Image
                  source={require("../assets/images/p1.png")}
                  style={styles.questionImage}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.exit}></View>
          </View>

          <View style={styles.planetContainer}>
            {/* --------------------------ANSWER 1-------------------------------------------------- */}

            {this.state.fly1 && (
              <Animated.Image
                {...this.panResponder1.panHandlers}
                source={images.sentanceScreenImages.answer1.path1}
                style={[this.state.pan1.getLayout(), styles.image]}
              />
            )}

            {!this.state.fly1 && (
              <TouchableOpacity onPress={this.playAnswer1.bind(this)}>
                <Image source={this.state.answer1} style={styles.image} />
              </TouchableOpacity>
            )}

            {/* -------------------------ANSWER 2----------------------------------------------------- */}

            {this.state.fly2 && (
              <Animated.Image
                {...this.panResponder2.panHandlers}
                source={images.sentanceScreenImages.answer2.path1}
                style={[this.state.pan2.getLayout(), styles.image]}
              />
            )}

            {!this.state.fly2 && (
              <TouchableOpacity onPress={this.playAnswer2.bind(this)}>
                <Image source={this.state.answer2} style={styles.image} />
              </TouchableOpacity>
            )}

            {/* -------------------------ANSWER 3----------------------------------------------------- */}
            {this.state.fly3 && (
              <Animated.Image
                {...this.panResponder3.panHandlers}
                source={images.sentanceScreenImages.answer3.path1}
                style={[this.state.pan3.getLayout(), styles.image]}
              />
            )}

            {!this.state.fly3 && (
              <TouchableOpacity onPress={this.playAnswer3.bind(this)}>
                <Image source={this.state.answer3} style={styles.image} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  dropZone: {
    height: 100,
    //backgroundColor: "#2c3e50",
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
  },
  grid: {
    flex: 10,
    flexDirection: "row",
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    //backgroundColor: "pink",
  },
  questionImageAndPopup: {
    flex: 2,
    //backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  questionPopup: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  freeSpace: {
    flex: 1,
    //backgroundColor: "brown",
  },
  exit: {
    flex: 2,
    //backgroundColor: "yellow",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    //backgroundColor: "blue",
  },
  planetContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    //backgroundColor: "orange",
  },
  questionImageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 120,
  },
  questionImage: {
    width: 200,
    height: 99,
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
