import React from "react";
import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  flexContainer: {
    width: "100%",
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
  },
});

const UserFormDetails = ({ route, navigation }) => {
  const { name, age, email, number } = route.params;

  return (
    <View style={styles.flexContainer}>
      <Text style={styles.textStyle}>User Details</Text>
      <View>
        <Text style={styles.textStyle}>Name: {name}</Text>
        <Text style={styles.textStyle}>Age: {age}</Text>
        <Text style={styles.textStyle}>Email: {email}</Text>
        <Text style={styles.textStyle}>Number: {number}</Text>
      </View>
    </View>
  );
};

export default UserFormDetails;
