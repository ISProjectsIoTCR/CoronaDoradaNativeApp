import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "screens/Restaurants/RestaurantsScreen";
import { AddRestarantScreen } from "screens/Restaurants/AddRestarantScreen";
import { RestaurantScreen } from "screens/Restaurants/RestaurantScreen";
import { AddReviewRestaurantScreen } from "screens/Restaurants/AddReviewRestaurantScreen";
import { screen } from "utils";

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurant.restaurants}
        component={RestaurantsScreen}
        options={{ title: "Asociaciones" }}
      />
      <Stack.Screen
        name={screen.restaurant.addRestaurant}
        component={AddRestarantScreen}
        options={{ title: "Nueva asociación" }}
      />
      <Stack.Screen
        name={screen.restaurant.restaurant}
        component={RestaurantScreen}
        options={{ title: "Asociación" }}
      />
      <Stack.Screen
        name={screen.restaurant.addReviewRestaurant}
        component={AddReviewRestaurantScreen}
        options={{ title: "Nueva opinión" }}
      />
    </Stack.Navigator>
  );
}
