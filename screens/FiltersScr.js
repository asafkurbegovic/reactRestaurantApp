import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FavoritesScr from './FavoritesScr';

const FilterScr = props => {
    return(
        <View style={styles.screen}>
            <Text>Fil screen here!</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default FavoritesScr;