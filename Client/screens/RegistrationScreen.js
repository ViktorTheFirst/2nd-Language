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

import { register } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import bgImage from "../assets/images/regBG.jpg";
const { width: WIDTH } = Dimensions.get("window");

const RegistrationScreen = (props) => {
  const [firstName, setfName] = useState("");
  const [lastName, setlName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  /* useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    };
  }, [error]);  */

  const registerHandler = async () => {
    //console.log("INSIDE registerHandler");
    setError(null);
    if (password != password2) {
      setError("Password should mach");
      return;
    }
    try {
      await dispatch(register({ email, password, lastName, firstName, age })); //activates register in authActions
      //await dispatch(getprofile());

      props.navigation.navigate("Login");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <ImageBackground style={styles.backgroundContainer} source={bgImage}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"First name"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setfName(text)}
          value={firstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Last name"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setlName(text)}
          value={lastName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Age"}
          placeholderTextColor={"rgba(255,255,255,0.7)"}
          style={styles.input}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setAge(text)}
          value={age}
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

      <TouchableOpacity style={styles.btnRegister} onPress={registerHandler}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={{ ...styles.btnText, color: "red" }}>
          Already registered
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
    backgroundColor: "rgba(174,92,218,0.7)",
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
    marginTop: 10,
  },
  btnRegister: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#5288de",
    justifyContent: "center",
    marginTop: 30,
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});
export default RegistrationScreen;
