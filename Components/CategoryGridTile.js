import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 200,
    elevation: 8,
    aspectRatio: 1 / 1,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontWeight: "bold",
  },
});
