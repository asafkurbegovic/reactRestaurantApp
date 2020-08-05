import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/data";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import Header from "../components/Header";
import Colors from "../Colors";

const FavoritesScr = (props) => {
  const meal = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m1");
  return <MealList data={meal} navigation={props.navigation} />;
};

FavoritesScr.navigationOptions = (data) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={Header}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            data.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScr;
