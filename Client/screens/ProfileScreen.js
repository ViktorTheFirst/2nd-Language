import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { USERS } from "../data/dummy-data";

const renderUserData = (itemData) => {
  return (
    <View>
      <Text>{itemData.item.age}</Text>
    </View>
  );
};

const ProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/img_12.jpg")}
        />
      </View>
      <FlatList numColumns={1} data={USERS} renderItem={renderUserData}>
        <View style={styles.dataContainer}>
          <Text>DATA</Text>
        </View>
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0AC4BA",
  },
  dataContainer: {
    flex: 2,
    backgroundColor: "#2BDA8E",
  },
});

export default ProfileScreen;
