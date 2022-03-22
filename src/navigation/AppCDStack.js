import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppCDScreen } from "screens/AppCDScreen";
import { screen } from "utils";

const Stack = createNativeStackNavigator();

export function AppCDStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="name"
        component={AppCDScreen}
        options={{ title: "AplicacionCD" }}
      />
    </Stack.Navigator>
  );
}
