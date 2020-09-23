import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  PanResponder,
  Animated,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import SuccessFail from "../components/SuccessFail";
import imageBG from "../assets/images/17.png";
import { Audio } from "expo-av";
import { images2 } from "../constants/imageExport";
import { sounds } from "../constants/soundExport";

export default class SentencesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessonNum: props.navigation.getParam("lesson"),
      qSoundName: props.navigation.getParam("qSound"), //a monkey eating a banana
      a1SoundName: props.navigation.getParam("a1Sound"), //a green crocodile
      a2SoundName: props.navigation.getParam("a2Sound"),
      a3SoundName: props.navigation.getParam("a3Sound"),
      qSound: sounds[props.navigation.getParam("qSound")], //require("../assets/sounds/a_monkey_eating_a_banana.mp3")
      a1Sound: sounds[props.navigation.getParam("a1Sound")],
      a2Sound: sounds[props.navigation.getParam("a2Sound")],
      a3Sound: sounds[props.navigation.getParam("a3Sound")],
      showQuestion: false,
      readyToFly1: false,
      readyToFly2: false,
      readyToFly3: false,
      fly1: false,
      fly2: false,
      fly3: false,
      answer: images2.rocket,
      answer1: images2[props.navigation.getParam("a1Sound")],
      answer2: images2[props.navigation.getParam("a2Sound")],
      answer3: images2[props.navigation.getParam("a3Sound")],
      showExitIcon: false,
      isCorrect: 0,
      exitIcon: images2.exitIcon.fail,
      pan1: new Animated.ValueXY(),
      pan2: new Animated.ValueXY(),
      pan3: new Animated.ValueXY(),
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
      /* onPanResponderRelease: (e, gesture) => {
        if (this.isDropZone(gesture)) {
          this.setState({
            showDraggable: false,
          });
        } else {
          Animated.spring(this.state.pan3, { toValue: { x: 0, y: 0 } }).start();
        }
      }, */
    });
  }

  async componentDidMount() {
    this.questionSound = new Audio.Sound();

    try {
      this.questionSound.loadAsync(
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
      console.log("error loading question sound", err);
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

    //check if question string "monkey" is exaclly liek answer strings like "banana"
    if (this.state.a1SoundName == this.state.qSoundName) {
      this.setState({ isCorrect: 1 });
    } else if (this.state.a2SoundName == this.state.qSoundName) {
      this.setState({ isCorrect: 2 });
    } else {
      this.setState({ isCorrect: 3 });
    }
  }

  async componentWillUnmount() {
    this.questionSound.unloadAsync();
    // returns NULL when escapes component, no longer holds data in memmory
    this.setState = (state, callback) => {
      return;
    };
  }

  playQuestion = async () => {
    try {
      this.questionSound.playAsync();
      this.setState({ showQuestion: !this.state.showQuestion });
      setTimeout(() => {
        this.setState({ showQuestion: !this.state.showQuestion });
      }, 2000);
      this.questionSound.setPositionAsync(0);
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };

  playAnswer1 = async () => {
    try {
      if (this.state.readyToFly1) {
        //second click - show rocket and fly
        if (this.state.isCorrect == 1) {
          //if this is the correct answer
          this.setState({ fly1: true });
          setTimeout(() => {
            //fly the rocket after 1 second
            Animated.timing(this.state.pan1, {
              toValue: { x: -320, y: 100 },
              duration: 2000,
            }).start();
          }, 1000);
          //in the end of animation show exit icon - correct
          setTimeout(() => {
            this.setState({
              exitIcon: images2.exitIcon.success,
              showExitIcon: true,
            });
          }, 2500);
        } else {
          //if this is NOT the correct answer show exit icon - incorrect
          this.setState({
            exitIcon: images2.exitIcon.fail,
            showExitIcon: true,
          });
          //remove the incorrect icon after 3 seconds
          setTimeout(() => {
            this.setState({ showExitIcon: false });
          }, 3000);
        }
      }
      this.setState({ readyToFly1: true }); //first click - show picture of sentence
    } catch (err) {
      console.log("Can't manage answer 1", err);
    }
  };

  playAnswer2 = async () => {
    try {
      if (this.state.readyToFly2) {
        //second click - show rocket and fly
        if (this.state.isCorrect == 2) {
          this.setState({ fly2: true });
          setTimeout(() => {
            //fly the rocket after 1 second
            Animated.timing(this.state.pan2, {
              toValue: { x: -320, y: -10 },
              duration: 2000,
            }).start();
          }, 1000);
          setTimeout(() => {
            this.setState({
              exitIcon: images2.exitIcon.success,
              showExitIcon: true,
            });
          }, 2500);
        } else {
          this.setState({
            exitIcon: images2.exitIcon.fail,
            showExitIcon: true,
          });
          //remove the incorrect icon after 3 seconds
          setTimeout(() => {
            this.setState({ showExitIcon: false });
          }, 3000);
        }
      }
      this.setState({ readyToFly2: true });
    } catch (err) {
      console.log("Can't manage answer 2", err);
    }
  };

  playAnswer3 = async () => {
    try {
      if (this.state.readyToFly3) {
        //second click - show rocket and fly
        if (this.state.isCorrect == 3) {
          this.setState({ fly3: true });
          setTimeout(() => {
            //fly the rocket after 1 second
            Animated.timing(this.state.pan3, {
              toValue: { x: -320, y: -140 },
              duration: 2000,
            }).start();
          }, 1000);
          setTimeout(() => {
            this.setState({
              exitIcon: images2.exitIcon.success,
              showExitIcon: true,
            });
          }, 2500);
        } else {
          this.setState({
            exitIcon: images2.exitIcon.fail,
            showExitIcon: true,
          });
          //remove the incorrect icon after 3 seconds
          setTimeout(() => {
            this.setState({ showExitIcon: false });
          }, 3000);
        }
      }
      this.setState({ readyToFly3: true });
    } catch (err) {
      console.log("Can't manage answer 3", err);
    }
  };

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
          <Text style={styles.headerText}>
            Sentence Lesson {this.state.lessonNum}
          </Text>
        </View>
        <View style={styles.grid}>
          {/* ---------------------------QUESTION----------------------------------------------- */}
          <View style={styles.questionContainer}>
            <View style={styles.freeSpace} />

            <View style={styles.questionImageAndPopup}>
              <View style={styles.questionPopup}>
                {this.state.showQuestion && (
                  <Text style={styles.questionText}>
                    {this.state.qSoundName}
                  </Text>
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
            {/* --------------------------------------SUCCESS/FAIL ICON-------------------------------- */}
            <View style={styles.exit}>
              <SuccessFail
                navigation={this.props.navigation} //pass the navigation prop to the component
                show={this.state.showExitIcon}
                iconType={this.state.exitIcon}
              />
            </View>
          </View>

          <View style={styles.planetContainer}>
            {/* --------------------------ANSWER 1-------------------------------------------------- */}
            {/* readyToFly and fly are false - show rocket */}
            {!this.state.fly1 && !this.state.readyToFly1 && (
              <TouchableOpacity onPress={this.playAnswer1.bind(this)}>
                <Image source={this.state.answer} style={styles.image} />
              </TouchableOpacity>
            )}

            {/* readyToFly is true and fly false - show sentence image */}
            {this.state.readyToFly1 && !this.state.fly1 && (
              <TouchableOpacity onPress={this.playAnswer1.bind(this)}>
                <Image source={this.state.answer1} style={styles.image} />
              </TouchableOpacity>
            )}

            {/* readyToFly and fly are true - show rocket and fly away*/}
            {this.state.readyToFly1 && this.state.fly1 && (
              <Animated.Image
                {...this.panResponder1.panHandlers}
                source={this.state.answer}
                style={[this.state.pan1.getLayout(), styles.image]}
              />
            )}

            {/* -------------------------ANSWER 2----------------------------------------------------- */}

            {/* readyToFly and fly are false - show rocket */}
            {!this.state.fly2 && !this.state.readyToFly2 && (
              <TouchableOpacity onPress={this.playAnswer2.bind(this)}>
                <Image source={this.state.answer} style={styles.image} />
              </TouchableOpacity>
            )}

            {/* readyToFly is true and fly false - show sentence image */}
            {this.state.readyToFly2 && !this.state.fly2 && (
              <TouchableOpacity onPress={this.playAnswer2.bind(this)}>
                <Image source={this.state.answer2} style={styles.image} />
              </TouchableOpacity>
            )}

            {/* readyToFly and fly are true - show rocket and fly away*/}
            {this.state.readyToFly2 && this.state.fly2 && (
              <Animated.Image
                {...this.panResponder2.panHandlers}
                source={this.state.answer}
                style={[this.state.pan2.getLayout(), styles.image]}
              />
            )}

            {/* -------------------------ANSWER 3----------------------------------------------------- */}
            {/* readyToFly and fly are false - show rocket */}
            {!this.state.fly3 && !this.state.readyToFly3 && (
              <TouchableOpacity onPress={this.playAnswer3.bind(this)}>
                <Image source={this.state.answer} style={styles.image} />
              </TouchableOpacity>
            )}

            {/* readyToFly is true and fly false - show sentence image */}
            {this.state.readyToFly3 && !this.state.fly3 && (
              <TouchableOpacity onPress={this.playAnswer3.bind(this)}>
                <Image source={this.state.answer3} style={styles.image} />
              </TouchableOpacity>
            )}

            {/* readyToFly and fly are true - show rocket and fly away*/}
            {this.state.readyToFly3 && this.state.fly3 && (
              <Animated.Image
                {...this.panResponder3.panHandlers}
                source={this.state.answer}
                style={[this.state.pan3.getLayout(), styles.image]}
              />
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
    alignItems: "center",
    justifyContent: "center",
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
