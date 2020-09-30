import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import { images2 } from "../constants/imageExport";

const Card = (props) => {
  const { progress } = useSelector((state) => state.profileRed);
  const { soundLvl, wordLvl, sentenceLvl, storyLvl } = progress;

  const [color, setColor] = useState("green");
  const [isDone, setIsDone] = useState(false);

  const progressUpdate = () => {
    if (props.title == "Sounds") {
      setColor("#3490de");
      if (props.lesson < soundLvl) {
        setIsDone(true);
      }
    } else if (props.title == "Words") {
      setColor("pink");
      if (props.lesson < wordLvl) {
        setIsDone(true);
      }
    } else if (props.title == "Sentence") {
      setColor("#ff4b5c");
      if (props.lesson < sentenceLvl) {
        setIsDone(true);
      }
    } else if (props.title == "Story") {
      if (props.lesson < storyLvl) {
        setIsDone(true);
      }
    }
  };

  useEffect(() => {
    //update the done lessons from redux store
    progressUpdate();
  }, [progress]);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => {
        props.navigation.navigate({
          routeName: props.goTo,
          params: {
            title: props.title,
            lesson: props.lesson,
            qSound: props.qSound,
            a1Sound: props.a1Sound,
            a2Sound: props.a2Sound,
            a3Sound: props.a3Sound,
          },
        });
      }}
    >
      {/* <Text>{props.title}</Text>
      <Text>Lesson#: {props.lesson}</Text>
      {isDone && <Text>isDone: YES</Text>}
      {!isDone && <Text>isDone: NO</Text>} */}
      <Image source={images2["card_5"]} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 190,
    padding: 14,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    opacity: 1,
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: 170,
    height: 190,
    borderRadius: 9,
  },
});

export default Card;
