import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { update_progress } from "../store/actions/profileActions";

const SuccessFail = (props) => {
  const { email } = useSelector((state) => state.profileRed);
  const dispatch = useDispatch();
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
            if (props.isWinner) {
              //TODO: update server that level is complete
              //console.log("title is success: ", props.title);
              //console.log("lessonNum is success: ", props.lesson);
              dispatch(update_progress(email, props.title, props.lesson));
            }
            props.navigation.navigate({
              routeName: "price",
              params: {
                isWinner: props.isWinner,
              },
            });
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
