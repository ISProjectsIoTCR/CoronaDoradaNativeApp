import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { RestaurantStack } from "navigation/RestaurantStack";
import { FavoritesStack } from "navigation/FavoritesStack";
import { RankingStack } from "navigation/RankingStack";
import { SearchStack } from "navigation/SearchStack";
import { AccountStack } from "navigation/AccountStack";
import { screen } from "utils";
import { AppCDScreen } from "../screens/AppCDScreen";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >

      <Tab.Screen
        name={"screen.account.tab"}
        component={AccountStack}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name={screen.app.tab}
        component={AppCDScreen}
        options={{ title: "App" }}
      />

      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Asociaciones" }}
      />

      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />

    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;

  if (route.name === screen.restaurant.tab) {
    iconName = "compass-outline";
  }

  if (route.name === screen.favorites.tab) {
    iconName = "heart-outline";
  }

  if (route.name === screen.ranking.tab) {
    iconName = "star-outline";
  }

  if (route.name === screen.search.tab) {
    iconName = "magnify";
  }

  if (route.name === screen.account.tab) {
    iconName = "account";
  }
  if (route.name === screen.app.tab) {
    iconName = "gamepad-variant-outline";
  }

  return (
    <Icon type="material-community" name={iconName} size={size} color={color} />
  );
}
