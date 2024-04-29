import { Text, View } from "react-native";

function MealDetailScreen({ route }) {
  const { mealId } = route.params;

  return (
    <View>
      <Text style={{ color: "white" }}>Meal with id: {mealId}</Text>
    </View>
  );
}

export default MealDetailScreen;
