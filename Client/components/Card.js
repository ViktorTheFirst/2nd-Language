import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Card = (props) => {
  //console.log("props Card is getting: ", props);
  //console.log("props screen: ", props.goTo);
  const [color, setColor] = useState("white");

  useEffect(() => {
    if (props.title == "Sounds") {
      setColor("pink");
    } else if (props.title == "Words") {
      setColor("#3490de");
    } else if (props.title == "Sentence") {
      setColor("#ff4b5c");
    }
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
      <Text>Qestion: {props.qSound}</Text>
      <Text>Answers:</Text>
      <Text>{props.a1Sound}</Text>
      <Text>{props.a2Sound}</Text>
      <Text>{props.a3Sound}</Text>
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
