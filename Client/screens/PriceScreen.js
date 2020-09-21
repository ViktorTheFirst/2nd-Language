import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import imageBG from "../assets/images/1.png";
import MyButton from "..//components/MyButton";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default class PriceScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground source={imageBG} style={styles.backgroundContainer}>
        <View style={styles.grid}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Congratulations!</Text>
          </View>
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              source={require("../assets/images/16.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <View style={styles.buttonsContainer}>
            <MyButton
              title={"BACK TO MAIN MENU"}
              whenClicked={() => {
                this.props.navigation.navigate("main");
              }}
            />
            <MyButton title={"NEXT LESSON"} />
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
    //flexDirection: "column",
    width: WIDTH,
    height: HEIGHT,
  },
  grid: {
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "pink",
    width: WIDTH,
    height: HEIGHT,
  },
  imageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",

    //backgroundColor: "white",
  },
  image: {
    flex: 1,
    width: 200,
    height: 140,

    borderColor: "white",
    borderWidth: 6,
  },
  buttonsContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerContainer: {
    flex: 1,
    //backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
