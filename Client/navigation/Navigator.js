import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation"; //wraps the main navigator

import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import SoundsScreen from "../screens/SoundsScreen";
import WordsScreen from "../screens/WordsScreen";
import StoryScreen from "../screens/StoryScreen";
import SentencesScreen from "../screens/SentencesScreen";
import PriceScreen from "../screens/PriceScreen";

//========================================================================================
const LoginRegisterNav = createStackNavigator(
  {
    Login: LoginScreen,
    Registration: RegistrationScreen,
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
    main: MainScreen,
    sounds: SoundsScreen,
    words: WordsScreen,
    sentence: SentencesScreen,
    story: StoryScreen,
    price: PriceScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);
//========================================================================================
const mainScreenNav = createSwitchNavigator(
  {
    //loginregister: LoginRegisterNav,
    choise: choiseNav,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);
//========================================================================================

export default createAppContainer(mainScreenNav);
