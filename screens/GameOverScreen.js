import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Title from "../components/Title";
import Colors from "../constants/Color";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({ userNum, restartHandler, guessRounds }) => {
  const { width, height } = useWindowDimensions();
  let imgMaxWidth = width >= 360 ? 140 : 300;
  let imgMaxHeight = width >= 360 ? 140 : 300;

  return (
    <View style={styles.rootContainer}>
      <Title color={Colors.blue600}>GameOverScreen</Title>
      <View
        style={[
          styles.imgContainer,
          {
            width: width * 0.55,
            height: width * 0.55,
            borderRadius: 1000,
            maxWidth: imgMaxWidth,
            maxHeight: imgMaxHeight,
          },
        ]}
      >
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

// const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    //   width: windowWidth * 0.55,
    //   height: windowWidth * 0.55,
    // borderRadius: windowWidth * 0.55,
    // maxWidth: 100,
    // maxHeight: 100,
    marginVertical: 30,
    borderWidth: 3,
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
