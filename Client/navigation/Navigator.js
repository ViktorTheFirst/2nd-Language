import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import MainScreen from "../screens/MainScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import TrainersGrid from "../screens/Trainers/TrainersGrid";
import TrainersInfoScreen from "..//screens/Trainers/TrainersInfoScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import FavoriteTrainersScreen from "../screens/FavoriteTrainersScreen";
import { Ionicons } from "@expo/vector-icons";

const defaultStackNavOptions = {
  //headerShown: false,
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontFamily: "dancing-script",
    fontSize: 30,
  },
  headerStyle: {
    backgroundColor: "#5288de",
  },
  headerTintColor: "white",
};
//========================================================================================
const TrainersNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        /* headerShown: false, */
      },
    },
    TrainersGrid: {
      screen: TrainersGrid,
      navigationOptions: {
        /* headerTitle: "Personal Trainers", */
      },
    },
    TrainersInfo: {
      screen: TrainersInfoScreen,
    },
    CategoriesList: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "All Categories",
      },
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
//========================================================================================
const profileNavigator = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
//========================================================================================
const scheduleNavigator = createStackNavigator(
  {
    Schedule: ScheduleScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
//========================================================================================
const favTrainersNavigator = createStackNavigator(
  {
    favTrainers: {
      screen: FavoriteTrainersScreen,
      navigationOptions: {
        headerTitle: "Favorite Trainers",
      },
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
//========================================================================================
const TabNavigator = createBottomTabNavigator(
  {
    Trainers: {
      screen: TrainersNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-fitness" size={29} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Profile: {
      screen: profileNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-contact" size={29} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#cf2144",
      inactiveTintColor: "white",
      activeBackgroundColor: "#5288de",
      inactiveBackgroundColor: "#5288de",
    },
  }
);
//========================================================================================
const MainNavigator = createDrawerNavigator(
  {
    TabNav: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: "Home",
      },
    },
    Schedule: {
      screen: scheduleNavigator,
      navigationOptions: {
        drawerLabel: "My Schedule",
      },
    },
    favTrainers: {
      screen: favTrainersNavigator,
      navigationOptions: {
        drawerLabel: "My Trainers",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: "red",
      labelStyle: {
        fontFamily: "averia-libre",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
