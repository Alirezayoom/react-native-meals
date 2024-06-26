import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../Components/MealDetails";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../Components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

      <View style={styles.content}>
        <Text style={[styles.text, styles.title]}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.text}
        />

        <Text style={styles.subTitle}>Ingredients</Text>
        <View style={styles.list}>
          {selectedMeal.ingredients.map((ingredient) => (
            <Text style={styles.listItem} key={ingredient}>
              {ingredient}
            </Text>
          ))}
        </View>
        <Text style={styles.subTitle}>Steps</Text>
        <View style={styles.list}>
          {selectedMeal.steps.map((step) => (
            <Text style={styles.listItem} key={step}>
              {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    aspectRatio: "16/9",
  },
  content: {
    marginVertical: 12,
    marginHorizontal: 24,
  },
  text: { color: "white" },
  title: { fontWeight: "bold", fontSize: 24, textAlign: "center" },
  subTitle: { color: "white", fontSize: 20, textAlign: "center", margin: 8 },
  list: { marginBottom: 8 },
  listItem: {
    color: "black",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 4,
    textAlign: "center",
    marginVertical: 4,
    marginHorizontal: 16,
  },
});
