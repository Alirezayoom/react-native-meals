import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "./MealDetails";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  const meadItemDetailHandler = () => {
    navigation.navigate("MealDetail", { mealId: id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={meadItemDetailHandler}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    elevation: 8,
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    padding: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
