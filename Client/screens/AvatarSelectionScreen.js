import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
import { useDispatch, useSelector } from 'react-redux';
import { images2 } from '../constants/imageExport';
import { get_user, update_avatar } from '../store/actions/profileActions';

const AvatarSelectionScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [firstTime, setFirstTime] = useState(false);
  const [chosenAvatar, setChosenAvatar] = useState(null);
  const [title, setTitle] = useState('Your avatar');

  const { avatar, firstName, lastName } = useSelector(
    (state) => state.profileRed
  );

  const { email } = useSelector((state) => state.authRed);

  const isFirstTime = () => {
    if (avatar == 'no avatar selected yet') {
      setFirstTime(true);
    } else {
      setChosenAvatar(images2[avatar]);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    try {
    } catch (err) {
      console.log('error getting user avatar', err);
    }
    isFirstTime();
  }, []);

  const closeModal = (avatarName) => {
    dispatch(update_avatar(email, avatarName));
    props.navigation.navigate('drawer');
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require('../assets/images/21.jpg')}
    >
      <View style={styles.backgroundContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>

        <View style={styles.avatarContainer}>
          {/* MODAL NOT VISIBLE */}
          {!modalVisible && (
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setFirstTime(false);
                  setTitle('Choose Avatar');
                }}
              >
                {firstTime && (
                  <View>
                    <Text>Choose your avatar</Text>
                    <Image
                      source={require('../assets/images/imagePlaceholder.jpg')}
                      style={styles.image}
                    />
                  </View>
                )}
              </TouchableOpacity>
              {!firstTime && (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('drawer');
                  }}
                  onLongPress={() => {
                    Alert.alert(
                      'Change Avatar',
                      'Are you sure you want to change avatar?',
                      [
                        {
                          text: 'Change',
                          onPress: () => {
                            setModalVisible(true);
                          },
                        },
                        {
                          text: 'Cancel',
                          onPress: () => {},
                        },
                      ]
                    );
                  }}
                >
                  <Image source={chosenAvatar} style={styles.image} />
                </TouchableOpacity>
              )}
            </View>
          )}
          {/* MODAL VISIBLE */}
          {modalVisible && (
            <Modal
              animationType='slide'
              visible={modalVisible}
              transparent={true}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    onPress={() => {
                      closeModal('monster_9');
                    }}
                  >
                    <Image
                      source={require('../assets/images/monster_9.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      closeModal('monster_2');
                    }}
                  >
                    <Image
                      source={require('../assets/images/monster_2.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      closeModal('monster_7');
                    }}
                  >
                    <Image
                      source={require('../assets/images/monster_7.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      closeModal('monster_1');
                    }}
                  >
                    <Image
                      source={require('../assets/images/monster_1.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      closeModal('monster_5');
                    }}
                  >
                    <Image
                      source={require('../assets/images/monster_5.png')}
                      style={styles.image}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: "rgba(114, 170, 204, 0.5)",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',

    color: 'purple',
    //backgroundColor: "orange",
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
    //backgroundColor: "blue",
  },
  image: {
    width: 140,
    height: 140,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    //backgroundColor: "pink",
    width: '80%',
    flexDirection: 'row',
  },
});
export default AvatarSelectionScreen;
