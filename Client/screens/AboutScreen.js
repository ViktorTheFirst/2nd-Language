import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import UpperTab from '../components/UpperTab';

const AboutScreen = (props) => {
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.upperTabContainer}>
        <UpperTab
          navigation={props.navigation}
          progress={props.progress}
          avatar={props.avatar}
        />
      </View>
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Information about the application goes here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperTabContainer: {
    flex: 1,
    //backgroundColor: "yellow",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

const mapStateToProps = (state) => {
  const { progress, avatar } = state.profileRed;
  return {
    progress,
    avatar,
  };
};

export default connect(mapStateToProps, null)(AboutScreen);
