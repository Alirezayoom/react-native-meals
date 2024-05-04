import { Text, View } from "react-native";
import MealList from "../Components/MealList";
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white" }}>No Favorites!</Text>
      </View>
    );
  }

  return <MealList data={favoriteMeals} />;
}

export default FavoritesScreen;
