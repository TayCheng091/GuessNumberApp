import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Color";

const PrimaryButton = ({ children, pressCallBack, textStyle = null }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.innerContainer}
        onPress={pressCallBack}
        android_ripple={{ color: "#ff0" }}
      >
        <Text style={textStyle}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
  },
  innerContainer: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.yellow600,
    alignItems: "center",
  },
  text: {
    color: Colors.black3,
    textAlign: "center",
  },
});
