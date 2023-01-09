import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import GuessLogItem from "../components/GuessLogItem";
import Title from "../components/Title";
import Colors from "../constants/Color";
import { Ionicons } from "@expo/vector-icons";

const guessRandomBetween = (min, max, exclude) => {
  let randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude)
    randomNum = Math.floor(Math.random() * (max - min)) + min;
  console.log(`min = ${min}, max=${max}, exclude = ${exclude}`);
  return randomNum;
};

let guessRange = {
  min: 1,
  max: 100,
};

let windowWidth = Dimensions.get("window").width;

const GameScreen = ({ userPickedNum, onGameOver, rounds }) => {
  let { width } = useWindowDimensions();

  let initGuessNum = guessRandomBetween(
    guessRange.min,
    guessRange.max,
    userPickedNum
  );
  let [guessNum, setGuessNum] = useState(initGuessNum);
  let [guessRounds, setGuessRounds] = useState([]);

  const guessAgainHandler = (status) => {
    console.log("userPickedNum = ", userPickedNum);
    console.log("round = ", rounds);
    if (
      (guessNum > userPickedNum && status === "more") ||
      (guessNum < userPickedNum && status === "less")
    ) {
      Alert.alert("Don't lie me!", "Be honest!", [{ text: "sorry" }]);
      return;
    }

    if (status === "more") {
      guessRange.min = guessNum + 1;
    } else {
      guessRange.max = guessNum;
    }
    setGuessNum(guessRandomBetween(guessRange.min, guessRange.max, guessNum));
  };

  useEffect(() => {
    if (guessNum == userPickedNum) {
      onGameOver(guessRounds.length);
    }
  }, [guessNum, userPickedNum, onGameOver]);

  useEffect(() => {
    setGuessRounds((prev) => [guessNum, ...prev]);
  }, [guessNum]);

  useEffect(() => {
    guessRange.min = 1;
    guessRange.max = 100;
  }, []);

  return (
    <View style={[styles.container, { marginTop: width <= 360 ? 150 : 30 }]}>
      <Title color={Colors.blue600}>Opponent's guess</Title>
      <View style={styles.mainContainer}>
        <Text style={styles.guessNumBox}>{guessNum}</Text>
        <Text style={styles.questionText}>Higher or lower ?</Text>
        <View style={styles.btnsContainer}>
          <View style={{ flex: 1 }}>
            <PrimaryButton pressCallBack={() => guessAgainHandler("more")}>
              <Ionicons name='add' size={24} />
            </PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton pressCallBack={() => guessAgainHandler("less")}>
              <Ionicons name='remove' size={24} />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              round={guessRounds.length - itemData.index}
              guessNum={itemData.item}
            >
              {itemData.item}
            </GuessLogItem>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // marginTop: windowWidth <= 360 ? 150 : 30,
    paddingHorizontal: 20,
  },
  mainContainer: {
    marginHorizontal: 50,
  },
  questionText: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 24,
  },
  guessNumBox: {
    marginTop: windowWidth <= 360 ? 50 : 30,
    padding: 15,
    borderWidth: 5,
    borderColor: Colors.green500,
    borderRadius: 20,
    color: Colors.green500,
    fontSize: 40,
    textAlign: "center",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  listContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 50,
    paddingVertical: 16,
  },
});
