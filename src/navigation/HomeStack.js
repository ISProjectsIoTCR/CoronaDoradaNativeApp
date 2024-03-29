import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "screens/HomeScreen";
import { screen } from "utils";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.home.home}
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
}
