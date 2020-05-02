import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const ScheduleScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>SCHEDULE SCREEN</Text>
    </View>
  );
};

ScheduleScreen.navigationOptions = (navData) => {
  return {
    //headerTitle: "Welcome to B7FIT",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ScheduleScreen;
