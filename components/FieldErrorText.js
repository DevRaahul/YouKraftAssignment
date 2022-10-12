import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 7,
    color: "red",
  },
});

const FieldErrorText = ({ message }) => {
  return <Text style={styles.errorText}>{message}</Text>;
};

export default FieldErrorText;
