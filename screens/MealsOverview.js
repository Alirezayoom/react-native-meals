import { FlatList, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../Components/MealItem";

function MealsOverview({ route }) {
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMealItems = (itemData) => {
    const mealsItemProps = {
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
