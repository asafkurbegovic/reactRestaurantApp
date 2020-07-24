import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Colors from "../Colors";

import CategoriesScr from "../screens/CategoriesScr";
import CategoryScr from "../screens/CategoryScr";
import MealDetailsScr from "../screens/MealDetailsScr";
import { Platform } from "react-native";

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

export default createAppContainer(Navigation);
