import React, { useCallback, useEffect, useState } from 'react'
import { RefreshControl } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { TokenComponent } from '../components';
import axios from 'axios';

const TrackerScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(0);

    const renderItem = ({item}) => {
        return <TokenComponent name={item.name} uri={item.icon_address} id={item.id}/>
    }

    const getAll = async() => {
        setRefreshing(true);
        res = await axios.get(`https://assets-api.sylo.io/v2/all?take=${number+10}&search=&has_history_only=true&skip=${number}`)
        setNumber(number+res.data.length)
        setData([...data, ...res.data])
        setRefreshing(false)
    }
 
    useEffect(() => {
        getAll()
    }, [])

    return (
        <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getAll} />}
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            onEndReachedThreshold={0.01}
            onEndReached={() => {
                getAll();
            }}
        />
    );
}

export default TrackerScreen