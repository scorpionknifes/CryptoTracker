import React, { useCallback, useContext, useEffect, useState } from 'react'
import { RefreshControl,FlatList,  } from 'react-native';
import { TokenComponent } from '../components';
import axios from 'axios';
import { TrackerContext } from '../context/TrackerContext';

const TrackerScreen = () => {
    const { search, darkTheme } = useContext(TrackerContext);
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState([]);
    const [extra, setExtra] = useState(false);
    const [number, setNumber] = useState(0);

    const renderItem = ({ item }) => {
        return <TokenComponent name={item.name} uri={darkTheme ? item.icon_address_dark : item.icon_address} id={item.id} symbol={item.symbol} />
    }

    const getMore = async () => {
        try {
            setRefreshing(true);
            res = await axios.get(`https://assets-api.sylo.io/v2/all?take=${number + 10}&search=${encodeURIComponent(search.trim())}&has_history_only=true&skip=${number}`)
            setNumber(number + res.data.length)
            setData([...data, ...res.data])
            setExtra(!extra)
            setRefreshing(false)
            console.log('refresh')
        } catch (e) {
            console.log(e)
        }
    }

    const getSearch = async () => {
        try {
            setRefreshing(true);
            res = await axios.get(`https://assets-api.sylo.io/v2/all?take=10&search=${encodeURIComponent(search.trim())}&has_history_only=true&skip=0`)
            console.log(res)
            setNumber(res.data.length)
            setData([...res.data])
            setExtra(!extra)
            setRefreshing(false)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getSearch()
    }, [search])

    return (
        <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getMore} />}
            data={data}
            extraData={extra}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            onEndReachedThreshold={0.01}
            onEndReached={() => {
                getMore();
            }}
        />
    );
}

export default TrackerScreen