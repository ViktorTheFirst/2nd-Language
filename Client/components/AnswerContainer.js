import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';
import { images } from '../constants/imageExport';
import { sounds } from '../constants/soundExport';

const AnswerContainer = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [showAnswer, setShowAnswer] = useState(props.show);
  useEffect(() => {
    if (props.show != showAnswer) {
      setShowAnswer(props.show);
    }
  }, [props.show]);

  const [imgSrc, setImgSrc] = useState(props.imgSrc);
  useEffect(() => {
    if (props.imgSrc != imgSrc) {
      setImgSrc(props.imgSrc);
    }
  }, [props.imgSrc]);

  const [questionSound, setQuestionSound] = useState(new Audio.Sound());
  const [answerSound, setAnswerSound] = useState(new Audio.Sound());
  useEffect(() => {
    try {
      questionSound.loadAsync(
        require('..//assets/sounds/ba.wav'),
        {
          shouldPlay: false,
          volume: 1.0,
          shouldCorrectPitch: true,
          isLooping: false,
        },
        true
      );
      answerSound.loadAsync(
        require('..//assets/sounds/piano.wav'),
        {
          shouldPlay: false,
          volume: 1.0,
          shouldCorrectPitch: true,
          isLooping: false,
        },
        true
      );
    } catch (err) {
      console.log('Could not load sounds in AnswerContainer', err);
    }
  }, [questionSound, answerSound]);

  const playAnswer = async (val) => {
    try {
      //await this.setState({ isCorrect: answer });

      if (this.state.selected1) {
        if (this.state.isCorrect) {
          await this.setState({
            exitIcon: images.soundScreenImages.exitIcon.success,
            showExitIcon: true,
          });
        } else {
          await this.setState({
            exitIcon: images.soundScreenImages.exitIcon.fail,
            showExitIcon: true,
          });
          setTimeout(() => {
            // TODO: if I want to change the state of ExitIcon from here I have to REDUX it
            //hide red X after couple seconds
            this.setState({ showExitIcon: false });
          }, 3000);
        }
      }
      await this.answerSound.playAsync();
      await setShowAnswer(true);
      await setImgSrc(images.soundScreenImages.answer1.path2);
      await answerSound.setPositionAsync(0);
      await setIsSelected(true);
    } catch (err) {
      console.log('Cant play audio', err);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.textContainer}>
        {showAnswer && <Text style={styles.questionText}>PIANO</Text>}
      </View>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => {
          playAnswer('viktor');
        }}
      >
        <Image source={imgSrc} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    //backgroundColor: "purple",
  },
  imageContainer: {
    flex: 3,
    //backgroundColor: "brown",
  },
  image: {
    width: 160,
    height: 140,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'purple',
  },
});

export default AnswerContainer;
