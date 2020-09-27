import React, { useEffect, useRef, useState } from 'react'
import { Fontisto } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const SearchBarComponent = () => {
    const [bar, setBar] = useState('search');
    const [search, setSearch] = useState("");
    

    switch (bar) {
        case 'default':
            return <DefaultBar setBar={setBar} />;
        case 'search':
            return <SearchBar setBar={setBar} setSearch={setSearch} search={search}/>;
        case 'crypto':
            return <CryptoBar/>;
    }
}

const DefaultBar = (props) => {
    return <View style={styles.container} >
        <Text style={styles.titleText}>Tracker</Text>
        <TouchableOpacity onPress={() => props.setBar('search')}>
            <Fontisto style={styles.searchIcon} name="search" size={21} color="black" />
        </TouchableOpacity>
    </View>
}

const SearchBar = (props) => {
    const searchInput = useRef();
    useEffect(()=>{
        searchInput.current.focus()
    },[])
    return <View style={styles.container} >
        <TextInput
            ref={searchInput}
            style={styles.searchInput}
            onChangeText={text => props.setSearch(text)}
            onBlur={()=>props.setBar('default')}
            value={props.search}
            placeholder='Search'
        />
        <TouchableOpacity onPress={() => props.setBar('default')}>
            <Fontisto style={styles.searchIcon} name="search" size={21} color="black"/>
        </TouchableOpacity>
    </View>
}

const CryptoBar = (props) => {
    return <View style={styles.container} >
        <Text style={styles.titleText}>Tracker</Text>
        <TouchableOpacity onPress={() => props.setBar('search')}>
            <Fontisto style={styles.searchIcon} name="search" size={21} color="black" />
        </TouchableOpacity>
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
    },
    searchInput: {
        borderColor: '#F6F6F6',
        borderWidth: 2,
        width: Dimensions.get('window').width - 64,
        marginLeft: 23,
        paddingLeft: 20,
        padding: 8,
        borderRadius: 15,
    },
})

export default SearchBarComponent