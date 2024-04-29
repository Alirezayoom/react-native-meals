import { StyleSheet, Text, View } from "react-native";

function MealDetails({ duration, complexity, affordability, textStyle }) {
  return (
    <View style={styles.details}>
      <Text style={textStyle}>{duration}</Text>
      <Text style={textStyle}>{complexity?.toUpperCase()}</Text>
      <Text style={textStyle}>{affordability?.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    marginTop: 0,
    margin: 8,
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
});
