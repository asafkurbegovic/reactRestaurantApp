import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";


const MealItem = (props) => {
  return (
    <View style={style.mealItem}>
      <TouchableOpacity onPress={props.selectMeal} >
        <View style={{ ...style.mealRow, ...{ height: "90%" } }}>
          <ImageBackground source={{ uri: props.image }} style={style.bckgrnd}>
            <Text style={style.title} numberOfLines={1}>{props.title}</Text>
          </ImageBackground>
        </View>
        <View
          style={{
            ...style.mealRow,
            ...{
              height: "10%",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              alignItems:'center'
            },
          }}
        >
          <Text>{props.duration}min</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    alignContent:'center',
    borderRadius:10,
    overflow:'hidden',
    borderColor:'black',
    borderWidth:0.3,
    marginVertical:5
  },
  mealRow: {
    flexDirection: "row",
  },
  bckgrnd: {
    width: "100%",
    height: "100%",
    justifyContent:'flex-end'
  },
  title:{
      color:'white',
      fontSize:24,
      backgroundColor:'rgba(0,0,0,0.4)',
      paddingVertical :10,
      textAlign:'center',
      fontFamily:'open-sens-bold'
  }
});

export default MealItem;
