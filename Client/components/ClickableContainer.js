import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ClickableContainer = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={styles.container}>
        <Text style={styles.nameTitle}>{props.name}</Text>
        <Image source={props.picture} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
    height: undefined,
  },
  container: {
    flex: 1,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    resizeMode: "center",
    overflow: "hidden",
    borderRadius: 10,
    //marginVertical: 15,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  nameTitle: {
    fontFamily: "averia-libre",
    fontSize: 22,
  },
});
export default ClickableContainer;
