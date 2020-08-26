import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  PanResponder,
  Animated,
} from "react-native";
import imageBG from "../assets/images/13.png";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
import { Audio } from "expo-av";
import { images } from "../constants/imageExport";

export default class WordsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showQuestion: false,
      showAnswer1: false,
      showAnswer2: false,
      showAnswer3: false,
      answer1: images.wordScreenImages.answer1.path1,
      answer2: images.wordScreenImages.answer2.path1,
      answer3: images.wordScreenImages.answer3.path1,
      showDraggable: true,
      dropZoneValues: null,
      pan: new Animated.ValueXY(),
      correct: false,
      incorrect: false,
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y,
        },
      ]),
      onPanResponderRelease: (e, gesture) => {
        //function activated when draggable in dropZone
        if (this.isDropZone(gesture)) {
          //console.log("e:", e);
          this.setState({
            showDraggable: false,
          });
        } else {
          Animated.spring(this.state.pan, { toValue: { x: 0, y: 0 } }).start();
        }
      },
    });
  }

  isDropZone(gesture) {
    const dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setDropZoneValues(event) {
    this.setState({
      dropZoneValues: event.nativeEvent.layout,
    });
  }

  async componentDidMount() {
    this.questionSound = new Audio.Sound();
    this.answerSound_1 = new Audio.Sound();
    this.answerSound_2 = new Audio.Sound();
    this.answerSound_3 = new Audio.Sound();
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

      this.answerSound_1.loadAsync(
        require("..//assets/sounds/monkeyMP3.mp3"),
        {
          shouldPlay: false,
          volume: 1.0,
          shouldCorrectPitch: true,
          isLooping: false,
        },
        true
      );

      this.answerSound_2.loadAsync(
        require("..//assets/sounds/monkeyMP3.mp3"),
        {
          shouldPlay: false,
          volume: 1.0,
          shouldCorrectPitch: true,
          isLooping: false,
        },
        true
      );

      this.answerSound_3.loadAsync(
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
    this.answerSound_1.unloadAsync();
    this.answerSound_2.unloadAsync();
    this.answerSound_3.unloadAsync();
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
      this.answerSound_1.playAsync();
      this.setState({ showAnswer1: true });
      this.setState({ answer1: images.wordScreenImages.answer1.path2 });
      this.answerSound_1.setPositionAsync(0);
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };
  playAnswer2 = async () => {
    try {
      this.answerSound_2.playAsync();
      this.setState({ showAnswer2: true });
      this.setState({ answer2: images.wordScreenImages.answer2.path2 });
      this.answerSound_2.setPositionAsync(0);
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };
  playAnswer3 = async () => {
    try {
      this.answerSound_3.playAsync();
      this.setState({ showAnswer3: true });
      this.setState({ answer3: images.wordScreenImages.answer3.path2 });
      this.answerSound_3.setPositionAsync(0);
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };

  render() {
    return (
      <ImageBackground source={imageBG} style={styles.backgroundContainer}>
        <View style={{ marginTop: 17 }}>
          <Text style={styles.headerText}>Words Lesson 1</Text>
        </View>
        <View style={styles.grid}>
          <View
            onLayout={this.setDropZoneValues.bind(this)}
            style={styles.question}
          >
            <View>
              {this.state.showQuestion && (
                <Text style={styles.questionText}>MONKEY</Text>
              )}
            </View>
            <TouchableOpacity onPress={this.playQuestion.bind(this)}>
              <Image
                source={require("../assets/images/p1.png")}
                style={styles.questionImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.planetContainer}>
            {/* --------------------------ANSWER 1----------------------------------- */}
            <View>
              {this.state.showAnswer1 && (
                <View>
                  <Text style={styles.questionText}>ANSWER1</Text>
                  <Animated.Image
                    {...this.panResponder.panHandlers}
                    source={this.state.answer1}
                    style={[this.state.pan.getLayout(), styles.image]}
                  />
                </View>
              )}
            </View>
            {!this.state.showAnswer1 && (
              <View>
                <TouchableOpacity onPress={this.playAnswer1.bind(this)}>
                  <Image source={this.state.answer1} style={styles.image} />
                </TouchableOpacity>
              </View>
            )}

            {/* -------------------------ANSWER 2----------------------------------------------------- */}
            <View>
              {this.state.showAnswer2 && (
                <Text style={styles.questionText}>ANSWER2</Text>
              )}
            </View>
            <TouchableOpacity onPress={this.playAnswer2.bind(this)}>
              <Image source={this.state.answer2} style={styles.image} />
            </TouchableOpacity>
            {/* -------------------------ANSWER 3----------------------------------------------------- */}
            <View>
              {this.state.showAnswer3 && (
                <Text style={styles.questionText}>ANSWER3</Text>
              )}
            </View>
            <TouchableOpacity onPress={this.playAnswer3.bind(this)}>
              <Image source={this.state.answer3} style={styles.image} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
  },
  question: {
    flex: 1,
    justifyContent: "center",
    height: 200,
    marginTop: HEIGHT / 3,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  planetContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
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
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#5288de",
    justifyContent: "center",
    marginTop: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
