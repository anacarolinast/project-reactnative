import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./src/pages/Register";
import Login from "./src/pages/Login";
import Contacts from "./src/pages/Contacts";
import AddContact from "./src/pages/AddContact";
import InfoContact from "./src/pages/InfoContact";
import EditContact from "./src/pages/EditContact";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditContact"
          component={EditContact}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoContact"
          component={InfoContact}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddContact"
          component={AddContact}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
