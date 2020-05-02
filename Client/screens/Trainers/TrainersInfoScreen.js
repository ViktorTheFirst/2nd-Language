import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/CustomHeaderButton";
import { toggleFavorite } from "..//../store/actions/trainers";

const TrainersInfoScreen = (props) => {
  const allTrainers = useSelector((state) => state.trainersRed.trainers); //get all trainers from redux
  const trainersID = props.navigation.getParam("trainersID"); //the id that was passed from trainersGrid
  //check if the id of this trainer is in favoritesArray
  const currTrainerIsFav = useSelector((state) =>
    state.trainersRed.favoriteTrainers.some((tr) => tr.id === trainersID)
  );
  const selectedTrainer = allTrainers.find((tr) => tr.id === trainersID);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(trainersID));
  }, [dispatch, trainersID]);

  //nest the props change in the useEffect to avoid infinite rendering loop
  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currTrainerIsFav });
  }, [currTrainerIsFav]);

  return (
    <View style={styles.container}>
      <Text>TRAINERS INFORMATION</Text>
      <Text>{selectedTrainer.name}</Text>
    </View>
  );
};

TrainersInfoScreen.navigationOptions = (navigationData) => {
  const trainersName = navigationData.navigation.getParam("trainersName");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: trainersName,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TrainersInfoScreen;
