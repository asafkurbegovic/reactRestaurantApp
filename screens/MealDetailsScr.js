import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { MEALS } from "../data/data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomButton from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";

const ListView = (props) => {
  return (
    <View style={styles.listview}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScr = (props) => {
  const mealID = props.navigation.getParam("mealID");
  const mealDetail = MEALS.find((meal) => meal.id === mealID);

  return (
    <ScrollView>
      <Image source={{ uri: mealDetail.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{mealDetail.duration}min</Text>
        <Text>{mealDetail.complexity.toUpperCase()}</Text>
        <Text>{mealDetail.affordability.toUpperCase()}</Text>
      </View>

      <Text style={styles.title}>Ingridients</Text>
      {mealDetail.ingredients.map((ingridient) => (
        <ListView key={ingridient}>{ingridient}</ListView>
      ))}
      <Text style={styles.title}>Steps</Text>
      {mealDetail.steps.map((step) => (
        <ListView key={step}>{step}</ListView>
      ))}
    </ScrollView>
  );
};

MealDetailScr.navigationOptions = (navigationData) => {
  const mealDetail = MEALS.find(
    (meal) => meal.id === navigationData.navigation.getParam("mealID")
  );

  return {
    headerTitle: mealDetail.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomButton}>
        <Item
          iconName="ios-star"
          onPress={() => {
            console.log("should work but is it?");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sens-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listview: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default MealDetailScr;
