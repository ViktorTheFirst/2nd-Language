import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { useSelector } from 'react-redux';
import { images2 } from '../constants/imageExport';

const Card = (props) => {
  const { progress } = useSelector((state) => state.profileRed);
  const { soundLvl, wordLvl, sentenceLvl, storyLvl } = progress;

  const [color, setColor] = useState('green');
  const [isDone, setIsDone] = useState(false);

  const progressUpdate = () => {
    if (props.title == 'Sounds') {
      setColor('#3490de');
      if (props.lesson < soundLvl) {
        setIsDone(true);
      }
    } else if (props.title == 'Words') {
      setColor('pink');
      if (props.lesson < wordLvl) {
        setIsDone(true);
      }
    } else if (props.title == 'Sentence') {
      setColor('#ff4b5c');
      if (props.lesson < sentenceLvl) {
        setIsDone(true);
      }
    } else if (props.title == 'Story') {
      if (props.lesson < storyLvl) {
        setIsDone(true);
      }
    }
  };

  useEffect(() => {
    //update the done lessons from redux store
    progressUpdate();
  }, [progress]);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => {
        props.navigation.navigate({
          routeName: props.goTo,
          params: {
            title: props.title,
            lesson: props.lesson,
            qSound: props.qSound,
            a1Sound: props.a1Sound,
            a2Sound: props.a2Sound,
            a3Sound: props.a3Sound,
          },
        });
      }}
    >
      {isDone && (
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginLeft: 20,
            }}
          >
            {props.title} - {props.lesson}
          </Text>
          <Image source={images2['trophy_2']} style={styles.trophy} />
        </View>
      )}
      {!isDone && props.title == 'Sounds' && (
        <Image source={images2['card_5']} style={styles.image} />
      )}
      {!isDone && props.title == 'Words' && (
        <Image source={images2['card_8']} style={styles.image} />
      )}
      {!isDone && props.title == 'Sentence' && (
        <Image source={images2['card_3']} style={styles.image} />
      )}
      {!isDone && props.title == 'Story' && (
        <Image source={images2['card_2']} style={styles.image} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 170,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    opacity: 1,
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: 170,
    height: 165,
    borderRadius: 9,
  },
  trophy: {
    width: 160,
    height: 130,
    marginTop: 7,
  },
});

export default Card;
