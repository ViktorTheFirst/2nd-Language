import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const InputComponent = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeHolder}
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    backgroundColor: "#fff",
  },
});

export default InputComponent;
