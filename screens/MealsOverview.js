import { Text } from "react-native";

function MealsOverview({ route }) {
  const { categoryId } = route.params;
  return <Text>MealsOverview - {categoryId}</Text>;
}

export default MealsOverview;
