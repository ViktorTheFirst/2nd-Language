import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import * as ScreenOrientation from 'expo-screen-orientation';
import { register } from '../store/actions/authActions';
import { connect } from 'react-redux';
import bgImage from '../assets/images/main_resized.jpg';
import logo from '../assets/images/Logo.png';

class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      color: 'white', //placeholder color
    };
  }

  async componentDidMount() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
  }

  registerHandler = async () => {
    //TODO: validation here <-------------------------
    const { email, password, lastName, firstName } = this.state;
    try {
      const token = await this.props.onRegister(
        email,
        password,
        lastName,
        firstName
      );
      //await dispatch(getprofile());
      if (token) {
        this.props.navigation.navigate('Login');
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <ImageBackground style={styles.backgroundContainer} source={bgImage}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='First Name'
            placeholderTextColor={this.state.color}
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ firstName: text })}
            value={this.state.firstName}
          />

          <TextInput
            placeholder='Last name'
            placeholderTextColor={this.state.color}
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ lastName: text })}
            value={this.state.lastName}
          />

          <TextInput
            placeholder='Email'
            keyboardType='email-address'
            placeholderTextColor={this.state.color}
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
          />

          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            placeholderTextColor={this.state.color}
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
          />

          <TextInput
            placeholder='Repeat Password'
            secureTextEntry={true}
            placeholderTextColor={this.state.color}
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setState({ password2: text })}
            value={this.state.password2}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={this.registerHandler}
          >
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
  }
}

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

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (email, password, lastName, firstName) =>
      dispatch(register({ email, password, lastName, firstName })),
  };
};

export default connect(null, mapDispatchToProps)(RegistrationScreen);
