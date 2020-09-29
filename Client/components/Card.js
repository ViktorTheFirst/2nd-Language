import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { get_user } from "../store/actions/profileActions";

const Card = (props) => {
  const { progress } = useSelector((state) => state.profileRed);
  const { email } = useSelector((state) => state.authRed);
  const { soundLvl, wordLvl, sentenceLvl, storyLvl } = progress;

  const [color, setColor] = useState("white");
  const [isDone, setIsDone] = useState(false);

  const dispatch = useDispatch();
  const func = () => {
    if (props.title == "Sounds") {
      setColor("pink");
      if (props.lesson < soundLvl) {
        setIsDone(true);
      }
    } else if (props.title == "Words") {
      setColor("#3490de");
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
    //dispatch(get_user(email));

    func();
  }, []);

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
      <Text>{props.title}</Text>
      <Text>Lesson#: {props.lesson}</Text>
      {/* <Text>Qestion: {props.qSound}</Text>
      <Text>Answers:</Text>
      <Text>{props.a1Sound}</Text>
      <Text>{props.a2Sound}</Text>
      <Text>{props.a3Sound}</Text> */}
      {isDone && <Text>isDone: YES</Text>}
      {!isDone && <Text>isDone: NO</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 190,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    opacity: 0.7,
  },
  title: {
    fontSize: 32,
  },
});

export default Card;
