import React from "react";
import { View, StyleSheet, Text, Button, Platform  } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../Colors";

const CategoryScr = (props) => {
  const objId = props.navigation.getParam("categoryId");
  const particulatObj = CATEGORIES.find((cat) => cat.id === objId);

  return (
    <View style={styles.screen}>
      <Text>Category screen here!</Text>
      <Text>{particulatObj.name}</Text>
      <Button
        title="Meal Details"
        onPress={() => props.navigation.navigate({ routeName: "MealDetails" })}
      />
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
  },
});

export default CategoryScr;
