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
import imageBG from "../assets/images/12.png";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
import { Audio } from "expo-av";
import { images } from "../constants/imageExport";
import SuccessFail from "..//components/SuccessFail";

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
      pan1: new Animated.ValueXY(),
      pan2: new Animated.ValueXY(),
      pan3: new Animated.ValueXY(),
      correct: false,
      incorrect: false,
      showExitIcon: false,
      exitIcon: images.soundScreenImages.exitIcon.fail,
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
        //function activated when user releases the object
        if (this.isDropZone(gesture)) {
          this.setState({
            exitIcon: images.soundScreenImages.exitIcon.success,
            showExitIcon: true,
          });
        } else {
          Animated.spring(this.state.pan1, { toValue: { x: 0, y: 0 } }).start();
        }
      },
    });
    //---------------------------------PAN 2------------------------------------------------
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
        //function activated when user releases the object
        if (this.isDropZone(gesture)) {
          this.setState({
            exitIcon: images.soundScreenImages.exitIcon.fail,
            showExitIcon: true,
          });
          setTimeout(() => {
            //hide red X after couple seconds
            this.setState({ showExitIcon: false });
          }, 3000);
          setTimeout(() => {
            //return the image back
            Animated.spring(this.state.pan2, {
              toValue: { x: 0, y: 0 },
            }).start();
          }, 3000);
        } else {
          Animated.spring(this.state.pan2, { toValue: { x: 0, y: 0 } }).start();
        }
      },
    });
    //------------------------------PAN 3---------------------------------------------------
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
        //function activated when user releases the object
        if (this.isDropZone(gesture)) {
          this.setState({
            exitIcon: images.soundScreenImages.exitIcon.fail,
            showExitIcon: true,
          });
          setTimeout(() => {
            //hide red X after couple seconds
            this.setState({ showExitIcon: false });
          }, 3000);
          setTimeout(() => {
            //return the image back
            Animated.spring(this.state.pan3, {
              toValue: { x: 0, y: 0 },
            }).start();
          }, 3000);
        } else {
          Animated.spring(this.state.pan3, { toValue: { x: 0, y: 0 } }).start();
        }
      },
    });
  }

  isDropZone(gesture) {
    const dz = this.state.dropZoneValues;
    /* console.log("dropzone: ", dz);
    console.log("gesture.moveX: ", gesture.moveX);
    console.log("gesture.moveY: ", gesture.moveY); */
    return (
      gesture.moveX > WIDTH / 4 &&
      gesture.moveX < WIDTH - WIDTH / 4 &&
      gesture.moveY > HEIGHT - dz.height
    );
  }

  setDropZoneValues(event) {
    //console.log("event:", event);
    this.setState({
      dropZoneValues: event.nativeEvent.layout,
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
      this.setState({ answer1: images.wordScreenImages.answer1.path2 });
      this.setState({ showAnswer1: true });
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };
  playAnswer2 = async () => {
    try {
      this.setState({ answer2: images.wordScreenImages.answer2.path2 });
      this.setState({ showAnswer2: true });
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };
  playAnswer3 = async () => {
    try {
      this.setState({ answer3: images.wordScreenImages.answer3.path2 });
      this.setState({ showAnswer3: true });
    } catch (err) {
      console.log("Cant play audio", err);
    }
  };

  render() {
    return (
      <ImageBackground source={imageBG} style={styles.backgroundContainer}>
        {/* --------------------------------------HEADER------------------------------------------------ */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Words Lesson 1</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.answerRow}>
            {/* --------------------------------------ANSWER 1------------------------------------------------ */}
            <View /* style={styles.answerImageContainer} */>
              {this.state.showAnswer1 && (
                <Animated.Image
                  {...this.panResponder1.panHandlers}
                  source={this.state.answer1}
                  style={[this.state.pan1.getLayout(), styles.image]}
                />
              )}

              {!this.state.showAnswer1 && (
                <TouchableOpacity onPress={this.playAnswer1.bind(this)}>
                  <Image source={this.state.answer1} style={styles.image} />
                </TouchableOpacity>
              )}
            </View>

            {/* --------------------------------------ANSWER 2------------------------------------------------ */}
            <View /* style={styles.answerImageContainer} */>
              {this.state.showAnswer2 && (
                <Animated.Image
                  {...this.panResponder2.panHandlers}
                  source={this.state.answer2}
                  style={[this.state.pan2.getLayout(), styles.image]}
                />
              )}

              {!this.state.showAnswer2 && (
                <TouchableOpacity onPress={this.playAnswer2.bind(this)}>
                  <Image source={this.state.answer2} style={styles.image} />
                </TouchableOpacity>
              )}
            </View>

            {/* --------------------------------------ANSWER 3------------------------------------------------ */}
            <View /* style={styles.answerImageContainer} */>
              {this.state.showAnswer3 && (
                <Animated.Image
                  {...this.panResponder3.panHandlers}
                  source={this.state.answer3}
                  style={[this.state.pan3.getLayout(), styles.image]}
                />
              )}

              {!this.state.showAnswer3 && (
                <TouchableOpacity onPress={this.playAnswer3.bind(this)}>
                  <Image source={this.state.answer3} style={styles.image} />
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={styles.questionRow}>
            {/* --------------------------------------QUESTION TEXT------------------------------------------------ */}
            <View style={styles.freeSpace} />
            <View style={styles.questionImageAndpopup}>
              <View style={styles.questionPopup}>
                {this.state.showQuestion && (
                  <Text style={styles.questionText}>MONKEY</Text>
                )}
              </View>
              {/* --------------------------------------QUESTION IMAGE------------------------------------------------ */}
              <TouchableOpacity
                onPress={this.playQuestion.bind(this)}
                style={styles.questionImageContainer}
                onLayout={this.setDropZoneValues.bind(this)} //bind this area to be drop zone
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
  questionImageAndpopup: {
    flex: 2,
    //alignItems: "flex-start",
    //justifyContent: "center",
  },
  questionRow: {
    flex: 8,
    flexDirection: "row",
    justifyContent: "center",
    //alignItems: "center",
    //backgroundColor: "green",
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
  answerImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 160,
    height: 140,
    /* borderWidth: 2,
    borderColor: "white", */
  },
  questionImage: {
    width: 200,
    height: 99,
  },
  questionImageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "orange",
  },
  freeSpace: {
    flex: 1,
  },
  questionPopup: {
    flex: 1,
    //backgroundColor: "blue",
    justifyContent: "flex-end",
  },
  exit: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "brown",
  },
  backgroundContainer: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    flexDirection: "column",
    width: null,
    height: null,
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
});
