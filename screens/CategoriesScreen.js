import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(data) => data.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;
