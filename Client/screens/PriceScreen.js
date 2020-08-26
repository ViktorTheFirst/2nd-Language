import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import imageBG from "../assets/images/1.png";

export default class PriceScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground source={imageBG} style={styles.backgroundContainer}>
        <Text style={styles.headerText}>PRICE SCREEN</Text>
        <TouchableOpacity>
          <Text>NEXT LESSON</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("main");
          }}
        >
          <Text>BACK TO MAIN MENU</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: null,
    height: null,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
