import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from "react-native";
import bgImage from "../assets/images/main2.jpg";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/authActions";
import { get_user } from "../store/actions/profileActions";
import { LinearGradient } from "expo-linear-gradient";
//import * as ScreenOrientation from "expo-screen-orientation";
const BG = require("../assets/images/main2.jpg");
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  /* useEffect(() => {
    async function changeToPortrait() {
      //if (WIDTH > HEIGHT) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
      //}
    }

    //activate the orientation change
    changeToPortrait();
    //clean up after exiting the component
    return async function changeToLandscape() {
      //if (HEIGHT > WIDTH) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
      //}
    };
  }); */

  const loginHandler = async () => {
    //console.log("LOGIN");
    try {
      await dispatch(login({ email, password })); //activates login in authActions
      await dispatch(get_user(email)); // this server call insures avatar is up to date in redux store
      props.navigation.navigate("avatar");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImageBackground style={styles.backgroundContainer} source={BG}>
      <View style={styles.grid}>
        <View style={styles.logoContainer}>
          {/* <Image
            source={require("../assets/images/logo3.png")}
            style={{ height: 100, width: 100 }}
          /> */}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder={"Email"}
            keyboardType="email-address"
            placeholderTextColor={"rgba(10, 146, 168, 0.9)"}
            style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(text) => setEmail(text)}
            value={email}
            //onFocus={}
          />
          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"rgba(10, 146, 168, 0.9)"}
            style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={loginHandler}>
            <LinearGradient
              colors={[
                "rgba(184, 210, 51,1.0)",
                "rgba(20, 192, 242,1.0)",
                "rgba(10, 146, 168,1.0)",
              ]}
              start={[0.8, 0.9]}
              end={[0.5, 0.7]}
              style={styles.btnLogin}
            >
              <Text style={styles.btnText}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Registration")}
          >
            <LinearGradient
              colors={[
                "rgba(184, 210, 51,1.0)",
                "rgba(20, 192, 242,1.0)",
                "rgba(10, 146, 168,1.0)",
              ]}
              start={[0.8, 0.9]}
              end={[0.4, 0.2]}
              style={styles.btnRegister}
            >
              <Text style={{ ...styles.btnText }}>Create new acount</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
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
  grid: {
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "pink",
  },
  logoContainer: {
    flex: 3,
    //backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: WIDTH - 65,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45, // padding of the placeHolder text
    backgroundColor: "rgba(255,1,38,0.5)",
    marginHorizontal: 25,
    marginVertical: 5,
  },
  inputContainer: {
    flex: 3,

    //backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  btnLogin: {
    width: WIDTH - 65,
    height: 45,
    borderRadius: 25,
    backgroundColor: "rgb(184,210,51)",
    justifyContent: "center",
  },
  btnRegister: {
    width: WIDTH - 65,
    height: 45,
    borderRadius: 25,
    backgroundColor: "rgb(20,192,242)",
    justifyContent: "center",
    marginTop: 10,
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});
export default LoginScreen;
