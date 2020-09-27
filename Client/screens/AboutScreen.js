import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import UpperTab from "../components/UpperTab";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const AboutScreen = (props) => {
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.upperTabContainer}>
        <UpperTab navigation={props.navigation} />
      </View>
      <View style={{ flex: 4 }}>
        <Text>Information about the application goes here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  upperTabContainer: {
    flex: 1,
    //backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH - 20,
  },
});

export default AboutScreen;
