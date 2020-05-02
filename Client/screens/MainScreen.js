import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const MainScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <TouchableOpacity
          title="Group Trainings"
          style={styles.mainBlob}
          onPress={() => {
            props.navigation.navigate("CategoriesList");
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainBlob}>
          <Text style={{ color: "white", fontSize: 25 }}>Other Stuff</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainBlob}>
          <Text style={{ color: "white", fontSize: 25 }}>Some Other Stuff</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

MainScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Welcome to B7FIT",
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
    backgroundColor: "#a7c4f2",
  },
  mainBlob: {
    backgroundColor: "#5288de",
    padding: 10,
    width: "80%",
    alignItems: "center",
    borderRadius: 6,
  },
  body: {
    width: "90%",
    flex: 6,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#a7c4f2",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#F5F6B6",
    width: "100%",
  },
});

export default MainScreen;
