import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import bgImage from "../assets/images/fit_bg_6.jpg";

const { width: WIDTH } = Dimensions.get("window");

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const dispatch = useDispatch();

  return (
    <ImageBackground style={styles.backgroundContainer} source={bgImage}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Email"}
          keyboardType="email-address"
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          style={styles.input}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Password"}
          secureTextEntry={true}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          style={styles.input}
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnRegister}
        onPress={() => props.navigation.navigate("Registration")}
      >
        <Text style={{ ...styles.btnText, color: "red" }}>
          CREATE NEW ACCOUNT
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
  },
  inputContainer: {
    marginTop: 10,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#5288de",
    justifyContent: "center",
    marginTop: 30,
  },
  btnRegister: {
    position: "absolute",
    bottom: 10,
    textAlign: "center",
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});

export default LoginScreen;
