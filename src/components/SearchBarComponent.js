import React, { useContext, useEffect, useRef, useState } from 'react'
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native';
import { TrackerContext } from '../context/TrackerContext';

const SearchBarComponent = () => {
    const { header } = useContext(TrackerContext);
    const [bar, setBar] = useState('search');
    const [search, setSearch] = useState("");

    if (header !== null) {
        return <CryptoBar header={header} setBar={setBar} />;
    }

    switch (bar) {
        case 'default':
            return <DefaultBar setBar={setBar} setSearch={setSearch}/>;
        case 'search':
            return <SearchBar setBar={setBar} setSearch={setSearch} search={search} />;
    }
}

const DefaultBar = (props) => {
    return <View style={styles.container} >
        <Text style={styles.titleText}>Tracker</Text>
        <TouchableOpacity onPress={() => {props.setBar('search'); props.setSearch('')}}>
            <Fontisto style={styles.searchIcon} name="search" size={21} color="black" />
        </TouchableOpacity>
    </View>
}

const SearchBar = (props) => {
    const context = useContext(TrackerContext)
    const searchInput = useRef();
    useEffect(() => {
        searchInput.current.focus()
    }, [])
    return <View style={styles.container} >
        <TextInput
            ref={searchInput}
            style={styles.searchInput}
            onChangeText={text => {props.setSearch(text); context.setSearch(text)}}
            onBlur={() => props.setBar('default')}
            value={props.search}
            placeholder='Search'
        />
        <TouchableOpacity onPress={() => props.setBar('default')}>
            <Fontisto style={styles.searchIcon} name="search" size={21} color="black" />
        </TouchableOpacity>
    </View>
}

const CryptoBar = (props) => {
    const { changeScene, setHeader } = useContext(TrackerContext);

    const handleBack = () => {
        changeScene(true); 
        setHeader(null); 
        props.setBar('default');
    }

    return <View style={styles.container} >
        <TouchableOpacity onPress={handleBack}>
            <Ionicons style={styles.backIcon} name="ios-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.cryptoContainer}>
            <Image
                style={styles.cryptoLogo}
                source={{ uri: props.header.uri }}
            />
            <Text style={styles.cryptoName}>{props.header.name}</Text>
        </View>
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
    cryptoContainer: {
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: Dimensions.get('window').width - 64,
    },
    cryptoLogo: {
        width: 30,
        height: 30,
        
    },
    cryptoName: {
        color: '#495162',
        marginLeft: 12,
        fontSize: 18,
    },
    backIcon: {

    }
})

export default SearchBarComponent