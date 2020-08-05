import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import Colors from "../Colors";

import CategoriesScr from "../screens/CategoriesScr";
import CategoryScr from "../screens/CategoryScr";
import MealDetailsScr from "../screens/MealDetailsScr";
import FavoriteScr from "../screens/FavoritesScr";
import FiltersScr from "../screens/FiltersScr";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FilterScr from "../screens/FiltersScr";

const FavoritesNavigation = createStackNavigator(
  {
    Favorites: FavoriteScr,
    MealDetails: MealDetailsScr,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const Navigation = createStackNavigator(
  {
    Categories: CategoriesScr,
    Category: CategoryScr,
    MealDetails: MealDetailsScr,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const BottomNavigation = createBottomTabNavigator(
  {
    Meals: {
      screen: Navigation,
      navigationOptions: {
        tabBarIcon: (info) => {
          return (
            <MaterialCommunityIcons name="food" size={25} color="orange" />
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesNavigation,
      navigationOptions: {
        tabBarIcon: (info) => {
          return <Ionicons name="ios-star" size={25} color="purple" />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.secondaryColor,
    },
  }
);

const FilterNav = createStackNavigator({
  Filters:FilterScr
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor:
      Platform.OS === "android" ? "white" : Colors.primaryColor,
  },
});

const MainNavigation = createDrawerNavigator(
  {
    Meals: BottomNavigation,
    Filters: FilterNav,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(MainNavigation);
