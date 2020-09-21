import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const SuccessFail = (props) => {
  const [showIcon, setShowIcon] = useState(props.show);
  useEffect(() => {
    if (props.show != showIcon) {
      setShowIcon(props.show);
    }
  }, [props.show]);

  const [exitIcon, setExitIcon] = useState(props.iconType);
  useEffect(() => {
    if (props.iconType != exitIcon) {
      setExitIcon(props.iconType);
    }
  }, [props.iconType]);

  return (
    <View>
      {showIcon && (
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("price");
          }}
        >
          <Image source={exitIcon} style={styles.exitIconImage} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  exitIconImage: {
    width: 140,
    height: 140,
  },
});

export default SuccessFail;
