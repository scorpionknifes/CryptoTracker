import React from 'react'
import { Fontisto } from '@expo/vector-icons'; 
import { StyleSheet, Text, View } from 'react-native';

const SearchBarComponent = () => {
    return <View style={styles.container} >
        <Text style={styles.titleText}>Tracker</Text>
        <Fontisto style={styles.searchIcon} name="search" size={21} color="black" />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 43,
        flexDirection: 'row',
        height: 66,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: { 
        marginLeft: 'auto',
        paddingLeft: 40,
        marginRight: 'auto',
        fontSize: 18, 
    },
    searchIcon: {
        padding: 10,
    }
})

export default SearchBarComponent