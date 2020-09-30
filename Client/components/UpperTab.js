import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { images2 } from "../constants/imageExport";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
import * as Progress from "react-native-progress";

const UpperTab = (props) => {
  const { progress, avatar } = useSelector((state) => state.profileRed);
  const { soundLvl, wordLvl, sentenceLvl, storyLvl } = progress;

  const [barProg, setBarProg] = useState(0.1);
  const calculateBarProg = () => {
    const numOfLessons = 7;
    const lessonsDone = soundLvl + wordLvl + sentenceLvl + storyLvl - 4;
    setBarProg(lessonsDone / numOfLessons);
  };

  useEffect(() => {
    calculateBarProg();
  });

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.avatarContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        >
          <Image source={images2[avatar]} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      <View style={styles.proccessContainer}>
        <Progress.Bar
          color="pink"
          progress={barProg}
          width={WIDTH / 1.75}
          height={12}
          borderRadius={7}
          borderWidth={3}
          borderColor="white"
        />
      </View>
      <View style={styles.garageContainer}>
        {/* <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("test");
          }}
        >
          <Text> Garage </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(114, 170, 204, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70%",
  },
  avatarContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "orange",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    borderColor: "white",
    borderWidth: 4,
  },
  proccessContainer: {
    flex: 3,
    //backgroundColor: "pink",
  },
  garageContainer: {
    flex: 1,
    //backgroundColor: "yellow",
  },
});
export default UpperTab;
