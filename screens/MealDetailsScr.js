import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MEALS } from "../data/data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomButton from "../components/Header";

const MealDetailScr = (props) => {
  const mealID = props.navigation.getParam("mealID");
  const mealDetail = MEALS.find((meal) => meal.id === mealID);

  return (
    <View style={styles.screen}>
      
      <Text>{mealDetail.title}</Text>
    </View>
  );
};

MealDetailScr.navigationOptions = (navigationData) => {
  const mealDetail = MEALS.find(
    (meal) => meal.id === navigationData.navigation.getParam("mealID")
  );

  return {
    headerTitle: mealDetail.title,
    headerRight:()=><HeaderButtons HeaderButtonComponent={CustomButton}>
        <Item  iconName='ios-star' onPress={()=>{console.log('should work but is it?')}} />
    </HeaderButtons>
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScr;
