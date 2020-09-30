import React, { useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Test = (props) => {
  useEffect(() => {});

  return (
    <View style={styles.backgroundContainer}>
      <Text>Progress bar test</Text>
      <ProgressBar />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Test;
