import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
const dim = Dimensions.get("screen");
import imageBG from "../assets/images/sounds_resized.png";
import SuccessFail from "../components/SuccessFail";
import AnswerContainer from "../components/AnswerContainer";

import { Audio } from "expo-av";
import { images } from "../constants/imageExport";
import { sounds } from "../constants/soundExport";

export default class SoundScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showQuestion: false,
      showAnswer1: false,
      showAnswer2: false,
      showAnswer3: false,
      answer1: images.soundScreenImages.answer1.path1,
      answer2: images.soundScreenImages.answer2.path1,
      answer3: images.soundScreenImages.answer3.path1,
      showExitIcon: false,
      exitIcon: images.soundScreenImages.exitIcon.fail,
      selected1: false,
      selected2: false,
      selected3: false,
      isCorrect: false,
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
        require("..//assets/sounds/ba.wav"),
        {
          shouldPlay: false,
          volume: 1.0,
          shouldCorrectPitch: true,
          isLooping: false,
        },
        true
      );

      this.answerSound_1.loadAsync(
        require("..//assets/sounds/piano.wav"),
        {
          shouldPlay: false,
          volume: 1.0,
          shouldCorrectPitch: true,
          isLooping: false,
        },
        true
      );

      this.answerSound_2.loadAsync(
        require("..//assets/sounds/banana.wav"),
        {
          shouldPlay: false,
          volume: 1.0,
          shouldCorrectPitch: true,
          isLooping: false,
        },
        true
      );

      this.answerSound_3.loadAsync(
        require("..//assets/sounds/lion.wav"),
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
    this.questionSound.unloadAsync();
    this.answerSound_1.unloadAsync();
    this.answerSound_2.unloadAsync();
    this.answerSound_3.unloadAsync();
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

  playAnswer1 = async (answer) => {
    try {
      await this.setState({ isCorrect: answer });

      if (this.state.selected1) {
        if (this.state.isCorrect) {
          await this.setState({
            exitIcon: images.soundScreenImages.exitIcon.success,
            showExitIcon: true,
          });
        } else {
          await this.setState({
            exitIcon: images.soundScreenImages.exitIcon.fail,
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
      await this.setState({ answer1: images.soundScreenImages.answer1.path2 });
      await this.answerSound_1.setPositionAsync(0);
      await this.setState({ selected1: true });
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };
  playAnswer2 = async (answer) => {
    try {
      await this.setState({ isCorrect: answer });

      if (this.state.selected2) {
        if (this.state.isCorrect) {
          this.setState({
            exitIcon: images.soundScreenImages.exitIcon.success,
            showExitIcon: true,
          });
        } else {
          await this.setState({
            exitIcon: images.soundScreenImages.exitIcon.fail,
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
      await this.setState({ answer2: images.soundScreenImages.answer2.path2 });
      await this.answerSound_2.setPositionAsync(0);
      await this.setState({ selected2: true });
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };

  playAnswer3 = async (answer) => {
    try {
      await this.setState({ isCorrect: answer });
      if (this.state.selected3) {
        if (this.state.isCorrect) {
          await this.setState({
            exitIcon: images.soundScreenImages.exitIcon.success,
            showExitIcon: true,
          });
        } else {
          await this.setState({
            exitIcon: images.soundScreenImages.exitIcon.fail,
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
      await this.setState({ answer3: images.soundScreenImages.answer3.path2 });
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
          <Text style={styles.headerText}>Sounds Lesson 1</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.answerRow}>
            {/* --------------------------------------ANSWER 1------------------------------------------------ */}
            <View>
              <View style={styles.textContainer}>
                {this.state.showAnswer1 && (
                  <Text style={styles.questionText}>PIANO</Text>
                )}
              </View>
              <TouchableOpacity
                style={styles.answer1ImageContainer}
                onPress={this.playAnswer1.bind(this, false)}
              >
                <Image source={this.state.answer1} style={styles.image} />
              </TouchableOpacity>
            </View>
            {/* --------------------------------------ANSWER 2------------------------------------------------ */}
            <View>
              <View style={styles.answer2TextContainer}>
                {this.state.showAnswer2 && (
                  <Text style={styles.questionText}>BANANA</Text>
                )}
              </View>
              <TouchableOpacity
                style={styles.answer2ImageContainer}
                onPress={this.playAnswer2.bind(this, true)}
              >
                <Image source={this.state.answer2} style={styles.image} />
              </TouchableOpacity>
            </View>
            {/* --------------------------------------ANSWER 3------------------------------------------------ */}
            <View>
              <View style={styles.answer3TextContainer}>
                {this.state.showAnswer3 && (
                  <Text style={styles.questionText}>LION</Text>
                )}
              </View>
              <TouchableOpacity
                style={styles.answer3ImageContainer}
                onPress={this.playAnswer3.bind(this, false)}
              >
                <Image source={this.state.answer3} style={styles.image} />
              </TouchableOpacity>
            </View>
          </View>
          {/* --------------------------------------QUESTION------------------------------------------------ */}
          <View style={styles.questionRow}>
            <View style={styles.freeSpace} />
            <View style={styles.questionImageAndpopup}>
              <View style={styles.questionPopup}>
                {this.state.showQuestion && (
                  <Text style={styles.questionText}>BA..</Text>
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
  },
  answerRow: {
    flex: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "yellow",
  },
  image: {
    width: 160,
    height: 140,
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
  answer1ImageContainer: {
    flex: 3,
    //backgroundColor: "pink",
  },
  answer2ImageContainer: {
    flex: 3,
    //backgroundColor: "pink",
  },
  answer3ImageContainer: {
    flex: 3,
    //backgroundColor: "green",
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
