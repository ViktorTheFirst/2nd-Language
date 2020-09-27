import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const UpperTab = (props) => {
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.avatarContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        >
          <Image
            source={require("../assets/images/ufo.png")}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.proccessContainer}>
        <Text>
          -------------------------- process bar will be here
          ------------------------
        </Text>
      </View>
      <View style={styles.garageContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("test");
          }}
        >
          <Text>space garage </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(114, 170, 204, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70%",
  },
  avatarContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "orange",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    borderColor: "white",
    borderWidth: 4,
  },
  proccessContainer: {
    flex: 3,
    //backgroundColor: "pink",
  },
  garageContainer: {
    flex: 1,
    //backgroundColor: "yellow",
  },
});
export default UpperTab;
