import { FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../Components/MealItem";
import { useLayoutEffect } from "react";

function MealsOverview({ route, navigation }) {
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

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
      data={displayMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItems}
    />
  );
}

export default MealsOverview;
