import { Text, View, StyleSheet } from "react-native";
import Color from "../constants/Color";

const GuessLogItem = ({ round, guessNum }) => {
  return (
    <View style={styles.logContainer}>
      <Text>#{round}: </Text>
      <Text>Opponent's Guess: {guessNum}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  logContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 18,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: Color.yellow700,
    backgroundColor: Color.green300,
    color: Color.blue600,
  },
});
