import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ children, color = "red" }) => {
  return (
    <Text style={{ ...styles.content, color, borderColor: color }}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  content: {
    maxWidth: "90%",
    textAlign: "center",
    fontSize: 32,
    borderWidth: 3,
  },
});
