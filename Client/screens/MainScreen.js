import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Image,
} from "react-native";
import Card from "../components/Card";
const BG = require("../assets/images/main_1.png");

const DATA = [
  {
    id: "1",
    title: "Sounds",
    lessonNum: "1",
    screen: "sounds",
    questionSound: "ba",
    answer_1_sound: "piano",
    answer_2_sound: "banana",
    answer_3_sound: "lion",
  },
  {
    id: "2",
    title: "Sounds",
    lessonNum: "2",
    screen: "sounds",
    questionSound: "di",
    answer_1_sound: "yellow",
    answer_2_sound: "stairs",
    answer_3_sound: "dinner",
  },
  {
    id: "3",
    title: "Sounds",
    lessonNum: "3",
    screen: "sounds",
    questionSound: "ba",
    answer_1_sound: "piano",
    answer_2_sound: "banana",
    answer_3_sound: "lion",
  },
  {
    id: "4",
    title: "Words",
    lessonNum: "1",
    screen: "words",
    questionSound: "monkey",
    answer_1_sound: "hippo",
    answer_2_sound: "turtle",
    answer_3_sound: "monkey",
  },
  {
    id: "5",
    title: "Words",
    lessonNum: "2",
    screen: "words",
    questionSound: "crocodile",
    answer_1_sound: "piano",
    answer_2_sound: "basket",
    answer_3_sound: "crocodile",
  },
  {
    id: "6",
    title: "Sentence",
    lessonNum: "1",
    screen: "sentence",
    questionSound: "a_monkey_eating_a_banana",
    answer_1_sound: "a_boy_eating_dinner",
    answer_2_sound: "a_green_crocodile",
    answer_3_sound: "a_monkey_eating_a_banana",
  },
  {
    id: "7",
    title: "Story",
    lessonNum: "1",
    screen: "story",
    questionSound: "one_two_three",
  },
];

const MainScreen = (props) => {
  const renderListItem = ({ item }) => (
    <Card
      title={item.title}
      lesson={item.lessonNum}
      goTo={item.screen}
      navigation={props.navigation}
      qSound={item.questionSound}
      a1Sound={item.answer_1_sound}
      a2Sound={item.answer_2_sound}
      a3Sound={item.answer_3_sound}
    />
  );

  return (
    <ImageBackground style={styles.backgroundContainer} source={BG}>
      <View style={styles.upperTabContainer}>
        <Text>Upper Tab will be here</Text>
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.bottomSpace}>
        <Text>Bottom space will be here</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContainer: {
    flex: 3,
    padding: 20,
    //backgroundColor: "orange",
  },
  upperTabContainer: {
    flex: 1,
    //backgroundColor: "yellow",
  },
  bottomSpace: {
    flex: 1,
    //backgroundColor: "green",
  },
});

export default MainScreen;
