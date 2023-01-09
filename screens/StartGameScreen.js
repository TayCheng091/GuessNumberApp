import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Color";

const StartGameScreen = ({ userPickNumHandler }) => {
  let [guessNumber, setGuessNumber] = useState("");

  const guessNumberHandler = (num) => {
    setGuessNumber(num);
  };

  const resetGuessNumber = () => {
    setGuessNumber("");
  };

  const confirmNumberHanlder = () => {
    const chosenNum = parseInt(guessNumber);
    if (!chosenNum) return;
    if (isNaN(chosenNum) || chosenNum < 0 || chosenNum >= 100) {
      Alert.alert(
        "Not valid number",
        "The number must between 0 and 99. Please guess again.i8",
        [
          {
            text: "OK",
            onPress: resetGuessNumber,
          },
        ],
        {
          cancelable: true,
          onDismiss: resetGuessNumber,
        }
      );
      return;
    }
    userPickNumHandler(chosenNum);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='numeric'
          autoCapitalize='none'
          autoComplete='off'
          onChangeText={guessNumberHandler}
          value={guessNumber}
        />
      </View>
      <View style={styles.btnsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton pressCallBack={resetGuessNumber}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton pressCallBack={confirmNumberHanlder}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.blue300,
    borderRadius: 8,
    elevation: 10, // android only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.7,
  },
  numberInput: {
    height: 50,
    width: 80,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: Colors.yellow700,
    color: Colors.yellow700,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  btnContainer: {
    flex: 1,
    maxWidth: 100,
  },
});
