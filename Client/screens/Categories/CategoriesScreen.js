import React from "react";
import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryItem from "../../components/CategoryItem";

const CategoriesScreen = (props) => {
  const renderCategory = (categoryData) => {
    return (
      <CategoryItem
        name={categoryData.item.name}
        id={categoryData.item.id}
        picture={categoryData.item.picture}
        onSelectCategory={() => {
          props.navigation.navigate({
            routeName: "TrainersGrid",
            params: {
              categoryID: categoryData.item.id, //farward this id to the trainers grid screen
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList numColumns={1} data={CATEGORIES} renderItem={renderCategory} />
  );
};

export default CategoriesScreen;
