import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text>{duration}</Text>
          <Text>{complexity?.toUpperCase()}</Text>
          <Text>{affordability?.toUpperCase()}</Text>
        </View>
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
  details: {
    marginTop: 0,
    margin: 8,
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
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
