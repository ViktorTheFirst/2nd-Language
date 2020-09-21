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
  constructor(props) {
    super(props);

    //-----------------CREATE FIRST PAN RESPONDER------------------------------------
    this.supNigga = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan1.x, dy: this.state.pan1.y },
      ]),
      onPanResponderRelease: () => {
        Animated.spring(this.state.pan1, { toValue: { x: 0, y: 0 } }).start();
      },
    });
    //-----------------CREATE SECOND PAN RESPONDER------------------------------------
    this.heyBro = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan2.x, dy: this.state.pan2.y },
      ]),
      onPanResponderRelease: (event, gesture) => {
        //console.log("gesture-----------:", gesture);
        if (this.isDropZone(gesture)) {
          console.log("object is in drop zone");
        } else {
          Animated.spring(this.state.pan2, {
            toValue: { x: 0, y: 0 },
          }).start();
        }
      },
    });
  }

  state = {
    pan1: new Animated.ValueXY(),
    pan2: new Animated.ValueXY(),
    dropZoneValues: null,
    w: WIDTH,
    h: HEIGHT,
  };

  isDropZone(gesture) {
    const dropzone = this.state.dropZoneValues;
    //console.log("dropzone: ", dropzone);
    //console.log("gesture.moveX: ", gesture.moveX);
    //console.log("gesture.moveY: ", gesture.moveY);
    return (
      gesture.moveX > WIDTH / 4 &&
      gesture.moveX < WIDTH - WIDTH / 4 &&
      gesture.moveY > HEIGHT - dropzone.height
      //gesture.moveY > dropzone.y && gesture.moveY < dropzone.y + dropzone.height
    );
  }

  setDropZoneValues(event) {
    this.setState({
      dropZoneValues: event.nativeEvent.layout,
    });
    //console.log("event.nativeEvent.layout:", event.nativeEvent.layout);
  }

  render() {
    return (
      <View style={styles.backgroundContainer}>
        <View style={styles.info}>
          <Text>The width is: {this.state.w}</Text>
          <Text>The height is: {this.state.h}</Text>
        </View>
        <View
          style={styles.dropZone}
          onLayout={this.setDropZoneValues.bind(this)} //defines the possition of the drop zone
        >
          <Text>Drop Zone</Text>
        </View>

        <Animated.View
          style={{
            transform: [
              { translateX: this.state.pan1.x },
              { translateY: this.state.pan1.y },
            ],
          }}
          {...this.supNigga.panHandlers}
        >
          <View style={styles.obj1}>
            <Text>obj1</Text>
          </View>
        </Animated.View>

        <Animated.View
          style={{
            transform: [
              { translateX: this.state.pan2.x },
              { translateY: this.state.pan2.y },
            ],
          }}
          {...this.heyBro.panHandlers}
        >
          <View style={styles.obj2}>
            <Text>obj2</Text>
          </View>
        </Animated.View>
      </View>
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
  info: {
    alignItems: "center",
    justifyContent: "center",
  },
  obj1: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  obj2: {
    height: 50,
    width: 50,
    backgroundColor: "blue",
  },
  dropZone: {
    position: "absolute",
    left: WIDTH / 4,
    bottom: 0,
    height: 80,
    width: WIDTH / 2,
    backgroundColor: "gray",
  },
});
