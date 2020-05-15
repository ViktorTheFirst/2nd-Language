import React, { useState, useEffect } from "react";
import {
  Alert,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { useDispatch } from "react-redux";
import { register } from "..//store/actions/authActions";
import { LinearGradient } from "expo-linear-gradient";
const { width: WIDTH } = Dimensions.get("window");
import { getprofile } from "../store/actions/profileActions";

const RegistrationScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const registerHandler = async () => {
    setError(null);
    if (password != password2) {
      setError("Password should mach");
      return;
    }
    try {
      await dispatch(register({ email, password, name })); //activates register in authActions
      await dispatch(getprofile());
      props.navigation.navigate("drawer");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <LinearGradient
      colors={["#251e4f", "#a79de3"]}
      style={styles.backgroundContainer}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Name"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Email"}
          keyboardType="email-address"
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Password"}
          secureTextEntry={true}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Repeat Password"}
          secureTextEntry={true}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setPassword2(text)}
          value={password2}
        />
      </View>

      <TouchableOpacity style={styles.btnLogin} onPress={registerHandler}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnRegister}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={{ ...styles.btnText, color: "white" }}>
          ALREADY REGISTERED
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

export default RegistrationScreen;
