import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { images2 } from '../constants/imageExport';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
import * as Progress from 'react-native-progress';

const UpperTab = (props) => {
  const { soundLvl, wordLvl, sentenceLvl, storyLvl } = props.progress;

  const [barProg, setBarProg] = useState(0);
  const calculateBarProg = () => {
    const numOfLessons = 7;
    const lessonsDone = soundLvl + wordLvl + sentenceLvl + storyLvl - 4;
    setBarProg(lessonsDone / numOfLessons);
  };

  useEffect(() => {
    console.log('[UpperTab] - useEffect');
    calculateBarProg();
  });

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.avatarContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        >
          <Image source={images2[props.avatar]} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      <View style={styles.proccessContainer}>
        <Text style={styles.progressText}>Beginner</Text>
        <Progress.Bar
          style={styles.progressBar}
          color='pink'
          progress={barProg}
          width={WIDTH / 1.75}
          height={14}
          borderRadius={7}
          borderWidth={3}
          borderColor='white'
        />
        <Text style={styles.progressText}>Advanced</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(114, 170, 204, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '70%',
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'orange',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    borderColor: 'white',
    borderWidth: 4,
  },
  proccessContainer: {
    flex: 3,
    minHeight: 20,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    //backgroundColor: 'pink',
  },
  progressBar: {
    flex: 2,
  },
  progressText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    //backgroundColor: 'green',
  },
});
export default UpperTab;
