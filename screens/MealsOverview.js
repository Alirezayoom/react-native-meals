import { FlatList, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../Components/MealItem";

function MealsOverview({ route }) {
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMealItems = (itemData) => {
    return <MealItem title={itemData.item.title} />;
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
