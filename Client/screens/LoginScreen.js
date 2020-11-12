import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../store/actions/authActions';
import { get_user } from '../store/actions/profileActions';
import { LinearGradient } from 'expo-linear-gradient';
import * as ScreenOrientation from 'expo-screen-orientation';
const BG = require('../assets/images/main2.jpg');

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  async componentDidMount() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
  }

  loginHandler = async () => {
    console.log('LOGIN');
    try {
      await this.props.onLogin(this.state.email, this.state.password);
      await this.props.onGetUser(this.state.email); // this server call insures avatar is up to date in redux store
      //change to LANDSCAPE
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
      this.props.navigation.navigate('avatar');
    } catch (err) {
      console.log(err);
    }
  };

  render() {
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
              placeholder='Email'
              keyboardType='email-address'
              placeholderTextColor={'rgba(10, 146, 168, 0.9)'}
              style={styles.input}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}
            />
            <TextInput
              placeholder='Password'
              secureTextEntry={true}
              placeholderTextColor={'rgba(10, 146, 168, 0.9)'}
              style={styles.input}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
            />
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={this.loginHandler}
              style={styles.touchableContainer}
            >
              <LinearGradient
                colors={[
                  'rgba(184, 210, 51,1.0)',
                  'rgba(20, 192, 242,1.0)',
                  'rgba(10, 146, 168,1.0)',
                ]}
                start={[0.8, 0.9]}
                end={[0.5, 0.7]}
                style={styles.btnLogin}
              >
                <Text style={styles.btnText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Registration')}
              style={styles.touchableContainer}
            >
              <LinearGradient
                colors={[
                  'rgba(184, 210, 51,1.0)',
                  'rgba(20, 192, 242,1.0)',
                  'rgba(10, 146, 168,1.0)',
                ]}
                start={[0.8, 0.9]}
                end={[0.4, 0.2]}
                style={styles.btnRegister}
              >
                <Text style={styles.btnText}>Create new acount</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    width: null,
    height: null,
  },
  grid: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'pink',
    width: '100%',
  },
  logoContainer: {
    flex: 3,
    //backgroundColor: "gray",
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingHorizontal: 25,
    backgroundColor: 'rgba(255,1,38,0.5)',
    marginVertical: 5,
  },
  inputContainer: {
    flex: 3,
    //backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'orange',
  },
  btnLogin: {
    width: '65%',
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgb(184,210,51)',
    justifyContent: 'center',
  },
  btnRegister: {
    width: '65%',
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgb(20,192,242)',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(login({ email, password })),
    onGetUser: (email) => dispatch(get_user(email)),
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
