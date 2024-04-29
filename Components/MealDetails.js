import { Text, View } from "react-native";

function MealDetails({ duration, complexity, affordability }) {
  return (
    <View>
      <Text>{duration}</Text>
      <Text>{complexity}</Text>
      <Text>{affordability}</Text>
    </View>
  );
}

export default MealDetails;
