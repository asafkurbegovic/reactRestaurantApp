import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/data";
import Colors from "../Colors";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoryScr = (props) => {
  

  const objId = props.navigation.getParam("categoryId");
  const particulatObj = CATEGORIES.find((cat) => cat.id === objId);

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(objId) >= 0
  );

  return (<MealList data={displayMeals} navigation={props.navigation}/>
    
  );
};

CategoryScr.navigationOptions = (navigationData) => {
  const particulatObj = CATEGORIES.find(
    (cat) => cat.id === navigationData.navigation.getParam("categoryId")
  );
  return {
    headerTitle: particulatObj.name,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};



export default CategoryScr;
