import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getprofile } from "../store/actions/profileActions";

const ProfileScreen = (props) => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
  });
  const dispatch = useDispatch();

  const stateData = useSelector((state) => state.authRed);

  console.log("stateData:", stateData);
  try {
    useEffect(() => {
      dispatch(getprofile());
      setProfileData(stateData);
    }, [stateData]);
  } catch (err) {
    throw err;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/img_12.jpg")}
        />
      </View>
      <View>
        <Text>Name: {profileData.name}</Text>
        <Text>Email: {profileData.email}</Text>
      </View>
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
