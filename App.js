import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/Color";

export default function App() {
  let [userPickedNum, setUserPickedNum] = useState(null);
  let [isGameOver, setIsGameOver] = useState(true);
  let [guessRounds, setGuessRounds] = useState(0);

  const pickNumHandler = (pickedNumber) => {
    setUserPickedNum(pickedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = (rounds) => {
    setIsGameOver(true);
    setGuessRounds(rounds);
  };

  const restartHnadler = () => {
    setUserPickedNum(null);
  };

  let screen = <StartGameScreen userPickNumHandler={pickNumHandler} />;

  if (userPickedNum)
    screen = (
      <GameScreen userPickedNum={userPickedNum} onGameOver={gameOverHandler} />
    );

  if (isGameOver && userPickedNum)
    screen = (
      <GameOverScreen
        userNum={userPickedNum}
        guessRounds={guessRounds}
        restartHandler={restartHnadler}
      />
    );

  return (
    <LinearGradient
      colors={[Colors.yellow600, Colors.green200]}
      end={{ x: 0.5, y: 1.0 }}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/Images/number_background.webp")}
        style={{ flex: 1 }}
        imageStyle={styles.imgBackground}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imgBackground: {
    opacity: 0.25,
  },
});
