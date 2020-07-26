import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/data";
import Colors from "../Colors";

const CategoriesScr = (props) => {
  const categoryLoop = (itmes) => {
    return (
      <TouchableOpacity
        style={styles.grid}
        onPress={() => {
          props.navigation.navigate({routeName:"Category", params:{
            categoryId: itmes.item.id
          }});
        }}
      >
        <View>
          <Text>{itmes.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={categoryLoop} />
  );
};

CategoriesScr.navigationOptions ={
    
    
    
    screen:CategoriesScr
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    borderColor: Colors.secondaryColor,
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
  },
});

export default CategoriesScr;
