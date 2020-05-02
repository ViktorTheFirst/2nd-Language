import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import TrainerItem from "../components/TrainerItem";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FavoriteTrainersScreen = (props) => {
  const favTrainers = useSelector(
    (state) => state.trainersRed.favoriteTrainers
  );

  if (favTrainers.length === 0 || !favTrainers) {
    return (
      <View style={styles.fallbackText}>
        <Text>No favorite trainers yet :( </Text>
      </View>
    );
  }

  const renderFavTrainer = (favTrainerData) => {
    return (
      <TrainerItem
        name={favTrainerData.item.name}
        id={favTrainerData.item.id}
        picture={favTrainerData.item.picture}
        onSelectTrainer={() => {
          props.navigation.navigate({
            routeName: "TrainersInfo",
            params: {
              trainersID: favTrainerData.item.id, //forward this id to the trainers info screen
              trainersName: favTrainerData.item.name,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList numColumns={1} data={favTrainers} renderItem={renderFavTrainer} />
  );
};

FavoriteTrainersScreen.navigationOptions = (navData) => {
  return {
    //headerTitle: "Welcome to B7FIT",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  fallbackText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteTrainersScreen;
