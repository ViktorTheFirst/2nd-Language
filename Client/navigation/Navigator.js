import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation"; //wraps the main navigator
import { createDrawerNavigator } from "react-navigation-drawer";

import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import SoundsScreen from "../screens/SoundsScreen";
import WordsScreen from "../screens/WordsScreen";
import StoryScreen from "../screens/StoryScreen";
import SentencesScreen from "../screens/SentencesScreen";
import PriceScreen from "../screens/PriceScreen";
import AboutScreen from "../screens/AboutScreen";
import Test from "../screens/Test";
import AvatarSelectionScreen from "../screens/AvatarSelectionScreen";
import { Ionicons } from "@expo/vector-icons";

//========================================================================================
const LoginRegisterNav = createStackNavigator(
  {
    Login: LoginScreen,
    Registration: RegistrationScreen,
    avatar: AvatarSelectionScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

//========================================================================================
const choiseNav = createStackNavigator(
  {
    //avatar: AvatarSelectionScreen,
    main: MainScreen,
    sounds: SoundsScreen,
    words: WordsScreen,
    sentence: SentencesScreen,
    story: StoryScreen,
    price: PriceScreen,
    about: AboutScreen,
    test: Test,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

//========================================================================================

const drawerNav = createDrawerNavigator(
  {
    //hide this item from the drawer navigator
    m: {
      screen: choiseNav,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },

    main: {
      screen: MainScreen,
      navigationOptions: {
        drawerLabel: "Lessons",

        drawerIcon: () => {
          return <Ionicons name="ios-paper" size={25} color="white" />;
        },
      },
    },
    about: {
      screen: AboutScreen,

      navigationOptions: {
        drawerLabel: "About",
        drawerIcon: () => {
          return (
            <Ionicons name="ios-information-circle" size={25} color="white" />
          );
        },
      },
    },
  },
  {
    drawerBackgroundColor: "#5ebb77",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

//========================================================================================

const mainScreenNav = createSwitchNavigator(
  {
    loginregister: LoginRegisterNav,
    drawer: drawerNav,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);
//========================================================================================

export default createAppContainer(mainScreenNav);
