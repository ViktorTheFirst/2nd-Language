import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import Card from '../components/Card';
import UpperTab from '../components/UpperTab';
const BG = require('../assets/images/main_1.png');

const DATA = [
  {
    id: '1',
    title: 'Sounds',
    lessonNum: '1',
    screen: 'sounds',
    questionSound: 'ba',
    answer_1_sound: 'piano',
    answer_2_sound: 'banana',
    answer_3_sound: 'lion',
  },
  {
    id: '2',
    title: 'Sounds',
    lessonNum: '2',
    screen: 'sounds',
    questionSound: 'di',
    answer_1_sound: 'yellow',
    answer_2_sound: 'stairs',
    answer_3_sound: 'dinner',
  },
  {
    id: '3',
    title: 'Sounds',
    lessonNum: '3',
    screen: 'sounds',
    questionSound: 'ba',
    answer_1_sound: 'piano',
    answer_2_sound: 'banana',
    answer_3_sound: 'lion',
  },
  {
    id: '4',
    title: 'Words',
    lessonNum: '1',
    screen: 'words',
    questionSound: 'monkey',
    answer_1_sound: 'hippo',
    answer_2_sound: 'turtle',
    answer_3_sound: 'monkey',
  },
  {
    id: '5',
    title: 'Words',
    lessonNum: '2',
    screen: 'words',
    questionSound: 'crocodile',
    answer_1_sound: 'piano',
    answer_2_sound: 'basket',
    answer_3_sound: 'crocodile',
  },
  {
    id: '6',
    title: 'Sentence',
    lessonNum: '1',
    screen: 'sentence',
    questionSound: 'a_monkey_eating_a_banana',
    answer_1_sound: 'a_boy_eating_dinner',
    answer_2_sound: 'a_green_crocodile',
    answer_3_sound: 'a_monkey_eating_a_banana',
  },
  {
    id: '7',
    title: 'Story',
    lessonNum: '1',
    screen: 'story',
    questionSound: 'one_two_three',
  },
];

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('[MainScreen] - componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.progress !== this.props.progress) {
      console.log('[MainScreen] - shouldComponentUpdate - TRUE');
      return true;
    }
    console.log('[MainScreen] - shouldComponentUpdate - FALSE');
    return false;
  }

  renderListItem = ({ item }) => (
    <Card
      title={item.title}
      lesson={item.lessonNum}
      goTo={item.screen}
      navigation={this.props.navigation}
      qSound={item.questionSound}
      a1Sound={item.answer_1_sound}
      a2Sound={item.answer_2_sound}
      a3Sound={item.answer_3_sound}
    />
  );

  render() {
    return (
      <ImageBackground style={styles.backgroundContainer} source={BG}>
        {Platform.OS == 'android' ? (
          <View style={styles.upperTabContainerAndroid}>
            <UpperTab
              navigation={this.props.navigation}
              progress={this.props.progress}
              avatar={this.props.avatar}
            />
          </View>
        ) : (
          <View style={styles.upperTabContainer}>
            <UpperTab
              navigation={this.props.navigation}
              progress={this.props.progress}
              avatar={this.props.avatar}
            />
          </View>
        )}

        <View style={styles.flatListContainer}>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={this.renderListItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.bottomSpace}>
          <Text>2nd Language - 2020</Text>
          {/* <Text>platform: {Platform.OS}</Text> */}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    flex: 5,
    padding: 20,
    //backgroundColor: 'yellow',
  },
  upperTabContainer: {
    flex: 2,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  upperTabContainerAndroid: {
    flex: 2,
    //marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  bottomSpace: {
    flex: 1,
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  const { progress, avatar } = state.profileRed;
  return {
    progress,
    avatar,
  };
};

export default connect(mapStateToProps, null)(MainScreen);
