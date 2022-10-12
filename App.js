import { StyleSheet, Text, View } from "react-native";
import UserForm from "./components/UserForm";
import UserFormDetails from "./components/UserFormDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutename={"Home"}>
        <Stack.Screen name={"Home"} component={UserForm} />
        <Stack.Screen name={"userDetails"} component={UserFormDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
