import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const CategoryItem = (props) => {
  return (
    <View style={styles.categoryItem}>
      <TouchableOpacity onPress={props.onSelectCategory}>
        <View>
          <View style={{ ...styles.row, ...styles.categoryHeader }}>
            <ImageBackground source={props.picture} style={styles.bgImage}>
              <Text style={styles.title}>{props.name}</Text>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  row: {
    flexDirection: "row",
  },
  categoryHeader: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "averia-libre",
    fontSize: 22,
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
});

export default CategoryItem;
