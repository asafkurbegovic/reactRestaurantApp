import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MealItem from './MealItem'

const MealList = (props) => {
  const renderMeals = (meal) => {
    return (
      <MealItem
        title={meal.item.title}
        selectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealID: meal.item.id,
            },
          });
        }}
        duration={meal.item.duration}
        complexity={meal.item.complexity}
        affordability={meal.item.affordability}
        image={meal.item.imageUrl}
      ></MealItem>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.data}
        renderItem={renderMeals}
        style={{ width: "100%" }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});

export default MealList;
