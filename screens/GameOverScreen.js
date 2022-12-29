import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/Color";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({ userNum, restartHandler, guessRounds }) => {
  return (
    <View style={styles.rootContainer}>
      <Title color={Colors.blue600}>GameOverScreen</Title>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/Images/gameover.webp")}
        ></Image>
      </View>
      <Text style={styles.description}>
        Your phone needed <Text style={styles.keyword}>{guessRounds}</Text>{" "}
        rounds to guess the number <Text style={styles.keyword}>{userNum}</Text>
      </Text>
      <PrimaryButton
        pressCallBack={restartHandler}
        textStyle={{ fontSize: 24, color: "white" }}
      >
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: 250,
    height: 250,
    marginVertical: 30,
    borderRadius: 125,
    borderWidth: 5,
    borderColor: Colors.green500,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  description: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
  },
  keyword: {
    color: Colors.dangerColor,
  },
});
