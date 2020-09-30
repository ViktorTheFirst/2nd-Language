import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import imageBG from "../assets/images/main_resized3.png";
import SuccessFail from "../components/SuccessFail";

import { Audio } from "expo-av";
import { images2 } from "../constants/imageExport";
import { sounds } from "../constants/soundExport";

export default class SoundScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.navigation.getParam("title"),
      lessonNum: props.navigation.getParam("lesson"),
      qSoundName: props.navigation.getParam("qSound"), //ba
      a1SoundName: props.navigation.getParam("a1Sound"), //banana
      a2SoundName: props.navigation.getParam("a2Sound"),
      a3SoundName: props.navigation.getParam("a3Sound"),
      qSound: sounds[props.navigation.getParam("qSound")], //require("../assets/sounds/ba.wav")
      a1Sound: sounds[props.navigation.getParam("a1Sound")],
      a2Sound: sounds[props.navigation.getParam("a2Sound")],
      a3Sound: sounds[props.navigation.getParam("a3Sound")],
      showQuestion: false,
      showAnswer1: false,
      showAnswer2: false,
      showAnswer3: false,
      answer: images2.jupiter,
      answer1: images2[props.navigation.getParam("a1Sound")],
      answer2: images2[props.navigation.getParam("a2Sound")],
      answer3: images2[props.navigation.getParam("a3Sound")],
      showExitIcon: false,
      exitIcon: images2.exitIcon.fail,
      selected1: false,
      selected2: false,
      selected3: false,
      isCorrect: 0,
      firstTimeWinner: true,
    };
  }

  async componentDidMount() {
    this.questionSound = new Audio.Sound();
    this.answerSound_1 = new Audio.Sound();
    this.answerSound_2 = new Audio.Sound();
    this.answerSound_3 = new Audio.Sound();
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

      this.answerSound_1.loadAsync(
        this.state.a1Sound,
        {
          shouldPlay: false,
          volume: 1.0,
          shouldCorrectPitch: true,
          isLooping: false,
        },
        true
      );

      this.answerSound_2.loadAsync(
        this.state.a2Sound,
        {
          shouldPlay: false,
          volume: 1.0,
          shouldCorrectPitch: true,
          isLooping: false,
        },
        true
      );

      this.answerSound_3.loadAsync(
        this.state.a3Sound,
        {
          shouldPlay: false,
          volume: 1.0,
          shouldCorrectPitch: true,
          isLooping: false,
        },
        true
      );
      //check if qustion string "ba" included in answer strings like "banana"
      if (this.state.a1SoundName.includes(this.state.qSoundName)) {
        this.setState({ isCorrect: 1 });
      } else if (this.state.a2SoundName.includes(this.state.qSoundName)) {
        this.setState({ isCorrect: 2 });
      } else {
        this.setState({ isCorrect: 3 });
      }
    } catch (err) {
      console.log("error loading sounds", err);
    }
  }

  async componentWillUnmount() {
    this.questionSound.unloadAsync();
    this.answerSound_1.unloadAsync();
    this.answerSound_2.unloadAsync();
    this.answerSound_3.unloadAsync();
    // returns NULL when escapes component, no longer holds data in memmory
    this.setState = (state, callback) => {
      return;
    };
  }

  playQuestion = async () => {
    try {
      await this.questionSound.playAsync();
      /* setTimeout(() => {
        //make the sound when the text is showing
        this.setState({ showQuestion: !this.state.showQuestion });
      }, 700); */
      this.setState({ showQuestion: !this.state.showQuestion });
      setTimeout(() => {
        //hide the quesion after some time
        this.setState({ showQuestion: !this.state.showQuestion });
      }, 1000);
      await this.questionSound.setPositionAsync(0);
    } catch (err) {
      console.log("Cant play question", err);
    }
  };

  playAnswer1 = async () => {
    try {
      if (this.state.selected1) {
        if (this.state.isCorrect == 1) {
          await this.setState({
            exitIcon: images2.exitIcon.success,
            showExitIcon: true,
          });
        } else {
          await this.setState({
            exitIcon: images2.exitIcon.fail,
            firstTimeWinner: false,
            showExitIcon: true,
          });
          setTimeout(() => {
            //hide red X after couple seconds
            this.setState({ showExitIcon: false });
          }, 3000);
        }
      }
      await this.answerSound_1.playAsync();
      await this.setState({ showAnswer1: true });
      await this.answerSound_1.setPositionAsync(0);
      await this.setState({ selected1: true });
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };
  playAnswer2 = async () => {
    try {
      if (this.state.selected2) {
        if (this.state.isCorrect == 2) {
          this.setState({
            exitIcon: images2.exitIcon.success,
            showExitIcon: true,
          });
        } else {
          await this.setState({
            exitIcon: images2.exitIcon.fail,
            firstTimeWinner: false,
            showExitIcon: true,
          });
          setTimeout(() => {
            //hide red X after couple seconds
            this.setState({ showExitIcon: false });
          }, 3000);
        }
      }
      await this.answerSound_2.playAsync();
      await this.setState({ showAnswer2: true });
      await this.answerSound_2.setPositionAsync(0);
      await this.setState({ selected2: true });
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };

  playAnswer3 = async () => {
    try {
      if (this.state.selected3) {
        if (this.state.isCorrect == 3) {
          await this.setState({
            exitIcon: images2.exitIcon.success,
            showExitIcon: true,
          });
        } else {
          await this.setState({
            exitIcon: images2.exitIcon.fail,
            firstTimeWinner: false,
            showExitIcon: true,
          });
          setTimeout(() => {
            //hide red X after couple seconds
            this.setState({ showExitIcon: false });
          }, 3000);
        }
      }
      await this.answerSound_3.playAsync();
      await this.setState({ showAnswer3: true });
      await this.answerSound_3.setPositionAsync(0);
      await this.setState({ selected3: true });
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };

  render() {
    return (
      <ImageBackground source={imageBG} style={styles.backgroundContainer}>
        {/* --------------------------------------HEADER------------------------------------------------ */}
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Sounds Lesson {this.state.lessonNum}
          </Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.answerRow}>
            {/* --------------------------------------ANSWER 1------------------------------------------------ */}
            <View style={styles.answerImageAndText}>
              <View style={styles.textContainer}>
                {this.state.showAnswer1 && (
                  <Text style={styles.questionText}>
                    {this.state.a1SoundName}
                  </Text>
                )}
              </View>
              <TouchableOpacity onPress={this.playAnswer1.bind(this)}>
                {!this.state.showAnswer1 && (
                  <Image source={this.state.answer} style={styles.image} />
                )}
                {this.state.showAnswer1 && (
                  <Image source={this.state.answer1} style={styles.image} />
                )}
              </TouchableOpacity>
            </View>
            {/* --------------------------------------ANSWER 2------------------------------------------------ */}
            <View style={styles.answerImageAndText}>
              <View style={styles.answer2TextContainer}>
                {this.state.showAnswer2 && (
                  <Text style={styles.questionText}>
                    {this.state.a2SoundName}
                  </Text>
                )}
              </View>
              <TouchableOpacity onPress={this.playAnswer2.bind(this)}>
                {!this.state.showAnswer2 && (
                  <Image source={this.state.answer} style={styles.image} />
                )}
                {this.state.showAnswer2 && (
                  <Image source={this.state.answer2} style={styles.image} />
                )}
              </TouchableOpacity>
            </View>
            {/* --------------------------------------ANSWER 3------------------------------------------------ */}
            <View style={styles.answerImageAndText}>
              <View style={styles.answer3TextContainer}>
                {this.state.showAnswer3 && (
                  <Text style={styles.questionText}>
                    {this.state.a3SoundName}
                  </Text>
                )}
              </View>
              <TouchableOpacity onPress={this.playAnswer3.bind(this)}>
                {!this.state.showAnswer3 && (
                  <Image source={this.state.answer} style={styles.image} />
                )}
                {this.state.showAnswer3 && (
                  <Image source={this.state.answer3} style={styles.image} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          {/* --------------------------------------QUESTION------------------------------------------------ */}
          <View style={styles.questionRow}>
            <View style={styles.freeSpace} />
            <View style={styles.questionImageAndpopup}>
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
            {/* --------------------------------------SUCCESS/FAIL ICON------------------------------------------------ */}
            <View style={styles.exit}>
              <SuccessFail
                navigation={this.props.navigation} //pass the navigation prop to the component
                show={this.state.showExitIcon}
                iconType={this.state.exitIcon}
                isWinner={this.state.firstTimeWinner}
                title={this.state.title}
                lesson={this.state.lessonNum}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 8,
    flexDirection: "column",
  },
  questionRow: {
    flex: 8,
    flexDirection: "row",
    justifyContent: "center",
    //alignItems: "center",
    //backgroundColor: "green",
  },
  freeSpace: {
    flex: 1,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "purple",
    //backgroundColor: "green",
  },
  answerRow: {
    flex: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "yellow",
  },
  image: {
    width: 120,
    height: 120,
  },
  questionImage: {
    width: 160,
    height: 80,
  },
  questionImageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "orange",
  },
  questionPopup: {
    flex: 1,
    //backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  answerImageAndText: {
    marginHorizontal: 10,
  },
  exit: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "brown",
  },
  questionImageAndpopup: {
    flex: 2,
    //alignItems: "flex-start",
    //justifyContent: "center",
  },
  backgroundContainer: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    flexDirection: "column",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "purple",
  },

  /* ----------------------------------------------------------------------------- */
  answer2TextContainer: {
    flex: 1,
    justifyContent: "flex-end",
    //backgroundColor: "coral",
  },
  answer3TextContainer: {
    flex: 1,
    justifyContent: "flex-end",
    //backgroundColor: "indigo",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    //backgroundColor: "purple",
  },
});
