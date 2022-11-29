import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  DatePickerAndroid,
} from "react-native";

export default function DefaultButton({
  buttonText,
  handlePress,
  width,
  height,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { width: width, height: height }]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}> {buttonText}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#8B008B",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#4B0082",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
