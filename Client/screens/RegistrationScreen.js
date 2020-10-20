import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';

import * as ScreenOrientation from 'expo-screen-orientation';
import { register } from '../store/actions/authActions';
import { useDispatch } from 'react-redux';
import bgImage from '../assets/images/main_resized.jpg';
import logo from '../assets/images/Logo.png';

const { width: WIDTH } = Dimensions.get('window');

const RegistrationScreen = (props) => {
  const [firstName, setfName] = useState('');
  const [lastName, setlName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [color, setColor] = useState('white'); //placeholder text color

  async function changeToPortrait() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
  }
  changeToPortrait();

  const dispatch = useDispatch();
  /* useEffect(() => {
    async function changeToPortrait() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }
    
    //activate the orientation change
    changeToPortrait();
    //clean up after exiting the component
    return async function changeToLandscape() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    };
  }); */

  const registerHandler = async () => {
    //TODO: validation here <-------------------------
    try {
      await dispatch(register({ email, password, lastName, firstName, age }));
      //await dispatch(getprofile());

      props.navigation.navigate('Login');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ImageBackground style={styles.backgroundContainer} source={bgImage}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='First Name'
          placeholderTextColor={color}
          style={styles.input}
          underlineColorAndroid='transparent'
          onChangeText={(text) => setfName(text)}
          value={firstName}
        />

        <TextInput
          placeholder='Last name'
          placeholderTextColor={color}
          style={styles.input}
          underlineColorAndroid='transparent'
          onChangeText={(text) => setlName(text)}
          value={lastName}
        />

        <TextInput
          placeholder='Email'
          keyboardType='email-address'
          placeholderTextColor={color}
          style={styles.input}
          underlineColorAndroid='transparent'
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor={color}
          style={styles.input}
          underlineColorAndroid='transparent'
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TextInput
          placeholder='Repeat Password'
          secureTextEntry={true}
          placeholderTextColor={color}
          style={styles.input}
          underlineColorAndroid='transparent'
          onChangeText={(text) => setPassword2(text)}
          value={password2}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnRegister} onPress={registerHandler}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => props.navigation.navigate('Login')}
        >
          <Text style={{ ...styles.btnText, color: 'coral' }}>
            Already registered
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.98,
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flex: 4,

    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'pink',
  },
  btnContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 2,
    //backgroundColor: 'white',
  },
  input: {
    width: '80%',
    height: 45,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
    fontSize: 16,
    paddingLeft: 45,
    marginVertical: 5,
    backgroundColor: 'rgba(174,92,218,0.7)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
  },
  btnLogin: {
    width: '60%',
    height: 45,

    borderBottomEndRadius: 200,
    borderTopStartRadius: 200,
    backgroundColor: 'rgba(184, 210, 51,1.0)',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnRegister: {
    width: '60%',
    height: 45,
    borderBottomEndRadius: 200,
    borderTopStartRadius: 200,
    backgroundColor: 'rgba(10, 146, 168,1.0)',
    justifyContent: 'center',
    marginTop: 30,
  },
  btnText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  header: {
    //backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 2,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});
export default RegistrationScreen;
