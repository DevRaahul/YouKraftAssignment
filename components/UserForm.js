import React, { useState } from "react";
import { Text, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { isInvalidAge, isInvalidEmail, isInvalidName, isInvalidNumber, isValidEmail } from "../common/FieldValidations";
import FieldErrorText from "./FieldErrorText";
import RequiredMark from "./RequiredMark";

//component stylesheet
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
  inputContainer: {
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
  },
  labels: {
    fontSize: 16,
    fontFamily: "sans-serif",
    marginBottom: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#000",
    fontFamily: "sans-serif",
    paddingHorizontal: 10,
    paddingVertical: 7,
    fontSize: 16,
    borderRadius: 2,
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0066cc",
    padding: 10,
    borderRadius: 2,
    padding: 10,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  disableBtn: {
    alignItems: "center",
    backgroundColor: "#808080",
    padding: 10,
    borderRadius: 2,
    padding: 10,
  },
});

const UserForm = ({ navigation }) => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
    number: "",
  });

  const [nameError, setNameError] = useState({ flag: false, msg: "" });
  const [emailError, setEmailError] = useState({ flag: false, msg: "" });
  const [ageError, setAgeError] = useState({ flag: false, msg: "" });
  const [numberError, setNumberError] = useState({ flag: false, msg: "" });
  const [isDisable, setIsDisable] = useState(false);

  const inputChangeHandler = (value, name) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const nameValidator = (value) => {
    if (isInvalidName(value)) {
      setIsDisable(true);
      setNameError({
        flag: true,
        msg: "Please enter valid name",
      });
    } else {
      if (!emailError.flag && !ageError.flag && !numberError.flag) setIsDisable(false);

      setNameError({
        flag: false,
        msg: "",
      });
    }
  };

  const emailValidator = (value) => {
    if (isInvalidEmail(value)) {
      setIsDisable(true);
      setEmailError({
        flag: true,
        msg: "Please enter valid email",
      });
    } else {
      if (!nameError.flag && !ageError.flag && !numberError.flag) setIsDisable(false);
      setEmailError({
        flag: false,
        msg: "",
      });
    }
  };
  const ageValidator = (value) => {
    if (isInvalidAge(value)) {
      setIsDisable(true);
      setAgeError({
        flag: true,
        msg: "Please enter valid age",
      });
    } else {
      if (!nameError.flag && !emailError.flag && !numberError.flag) setIsDisable(false);

      setAgeError({
        flag: false,
        msg: "",
      });
    }
  };
  const numberValidator = (value) => {
    if (isInvalidNumber(value)) {
      setIsDisable(true);
      setNumberError({
        flag: true,
        msg: "Please enter valid number",
      });
    } else {
      if (!nameError.flag && !emailError.flag && !ageError.flag) setIsDisable(false);

      setNumberError({
        flag: false,
        msg: "",
      });
    }
  };

  const handleSubmit = (value, name) => {
    navigation.navigate("userDetails", {
      name: `${userData.name}`,
      age: `${userData.age}`,
      email: `${userData.email}`,
      number: `${userData.number}`,
    });
  };

  const resetForm = () => {
    setUserData({
      name: "",
      email: "",
      number: "",
      age: "",
    });
    setAgeError({ flag: false, msg: "" });
    setNameError({ flag: false, msg: "" });
    setNumberError({ flag: false, msg: "" });
    setEmailError({ flag: false, msg: "" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text style={styles.textStyle}>User Sign-up Form</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>
          User Name <RequiredMark />
        </Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter Username..."
          value={userData.name}
          onBlur={(e) => nameValidator(e.target.value, "name")}
          onChangeText={(e) => inputChangeHandler(e, "name")}
        />
        {nameError.flag && <FieldErrorText message={nameError.msg} />}

        <Text style={styles.labels}>
          Age
          <RequiredMark />
        </Text>
        <TextInput
          style={styles.inputField}
          keyboardType="numeric"
          placeholder="Enter Age..."
          value={userData.age}
          onBlur={(e) => ageValidator(e.target.value, "age")}
          onChangeText={(e) => inputChangeHandler(e, "age")}
        />
        {ageError.flag && <FieldErrorText message={ageError.msg} />}

        <Text style={styles.labels}>
          Email
          <RequiredMark />
        </Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter E-mail..."
          value={userData.email}
          onBlur={(e) => emailValidator(e.target.value, "email")}
          onChangeText={(e) => inputChangeHandler(e, "email")}
        />
        {emailError.flag && <FieldErrorText message={emailError.msg} />}

        <Text style={styles.labels}>
          Phone Number
          <RequiredMark />
        </Text>
        <TextInput
          style={styles.inputField}
          keyboardType="numeric"
          maxLength={10}
          placeholder="Enter Number..."
          value={userData.number}
          onBlur={(e) => numberValidator(e.target.value, "number")}
          onChangeText={(e) => inputChangeHandler(e, "number")}
        />
        {numberError.flag && <FieldErrorText message={numberError.msg} />}

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={resetForm}>
            <Text>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={isDisable ? styles.disableBtn : styles.button} onPress={handleSubmit} disabled={isDisable}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserForm;
