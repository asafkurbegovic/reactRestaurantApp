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

const CategoryScr = (props) => {
  const renderMeals = (meal) => {
    return (
      <MealItem
        title={meal.item.title}
        selectMeal={() => {
          props.navigation.navigate({routeName:'MealDetails', params:{
            mealID:meal.item.id
          }});
        }}
        duration={meal.item.duration}
        complexity={meal.item.complexity}
        affordability={meal.item.affordability}
        image={meal.item.imageUrl}
      ></MealItem>
    );
  };

  const objId = props.navigation.getParam("categoryId");
  const particulatObj = CATEGORIES.find((cat) => cat.id === objId);

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(objId) >= 0
  );

  return (
    <View style={styles.screen}>

      <FlatList
        data={displayMeals}
        renderItem={renderMeals}
        style={{ width: "100%" }}
      ></FlatList>
      
    </View>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin:10
  },
});

export default CategoryScr;
