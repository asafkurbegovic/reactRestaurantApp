import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FavoritesScr = props => {
    return(
        <View style={styles.screen}>
            <Text>Favorites screen here!</Text>
        
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