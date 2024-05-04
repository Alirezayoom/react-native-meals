import React from "react";
import { FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ data }) => {
  const renderMealItems = (itemData) => {
    const mealsItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };

    return <MealItem {...mealsItemProps} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItems}
    />
  );
};

export default MealList;
