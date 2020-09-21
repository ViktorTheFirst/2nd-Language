import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableOpacity onPress={props.whenClicked}>
      <View style={styles.btn}>
        <Text style={styles.text}> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "rgb(71,173,222)",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "white",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

export default MyButton;
