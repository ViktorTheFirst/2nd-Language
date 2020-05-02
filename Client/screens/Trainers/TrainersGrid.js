import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import TrainerItem from "..//../components/TrainerItem";
import { useSelector } from "react-redux";

const TrainersGrid = (props) => {
  const favoritetrainers = useSelector((state) => state.trainersRed.trainers);
  const trainers = useSelector((state) => state.trainersRed.trainers); //get all trainers from redux

  const categoryID = props.navigation.getParam("categoryID");
  const displayedTrainers = trainers.filter(
    (tr) => tr.categoryIDs.indexOf(categoryID) >= 0
  );

  const renderTrainer = (trainerData) => {
    const isFavorite = favoritetrainers.some(
      (tr) => tr.id === trainerData.item.id
    );
    return (
      <TrainerItem
        name={trainerData.item.name}
        id={trainerData.item.id}
        picture={trainerData.item.picture}
        onSelectTrainer={() => {
          props.navigation.navigate({
            routeName: "TrainersInfo",
            params: {
              trainersID: trainerData.item.id, //forward this id to the trainers info screen
              trainersName: trainerData.item.name,
              isFav: isFavorite,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList
      numColumns={1}
      data={displayedTrainers}
      renderItem={renderTrainer}
    />
  );
};

TrainersGrid.navigationOptions = (navigationData) => {
  const categoryID = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryID);
  return {
    headerTitle: selectedCategory.name,
  };
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default TrainersGrid;
