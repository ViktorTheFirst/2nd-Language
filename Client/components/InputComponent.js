import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const InputComponent = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={props.placeHolder}
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  input: {
    width: "80%",
    backgroundColor: "#fff",
  },
});

export default InputComponent;
