import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GraphComponent from './GraphComponent';
import axios from 'axios';
import { TrackerContext } from '../context/TrackerContext';

const TokenComponent = (props) => {

    const { changeScene, setSelectedID, setHeader } = useContext(TrackerContext);

    const { name, uri, id } = props;
    const [data, setData] = useState({})

    useEffect(() => {
        const getAsset = async () => {
            const { data } = await axios.get(`https://assets-api.sylo.io/v2/asset/id/${id}/rate?fiat=NZD&period=${'week'}&type=historic`)
            setData(data)
        }
        getAsset()

    }, [])

    const handleTokenClick = () => {
        setHeader({
            name: name,
            uri: uri,
        })
        setSelectedID(id);
        changeScene(false);
    }

    const percentageIncrease = (history) => {
        if (history === undefined) {
            return <Text style={styles.cryptoValueChange}></Text>
        }
        const before = history[0].rate;
        const after = history[history.length - 1].rate;

        let increaseString
        let increase = (after - before) / after;

        if (increase >= 0) {
            increaseString = `+${(increase * 100.0).toFixed(2)}% ($${`${increase}`.substring(0, 6)})`
        } else {
            increaseString = `${(increase * 100.0).toFixed(2)}% ($${`${increase}`.substring(0, 6)})`
        }

        return <Text style={[styles.cryptoValueChange, { color: after >= before ? '#33BB5D' : '#bb3333' }]}>{increaseString}</Text>
    }

    return <TouchableOpacity style={styles.tokenContainer} onPress={handleTokenClick}>
        <View style={styles.headerContainer}>
            <View style={styles.cryptoContainer}>
                <Image
                    style={styles.cryptoLogo}
                    source={{ uri: uri }}
                />
                <Text style={styles.cryptoText}>{name}</Text>
            </View>
            <View style={styles.cryptoValueContainer}>
                <Text style={styles.cryptoValue}>${`${data?.rate}`.substring(0, 6)}</Text>
                {percentageIncrease(data?.history)}
            </View>
        </View>
        <GraphComponent data={data} />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    tokenContainer: {
        width: Dimensions.get('window').width - 32,
        height: 140,
        marginHorizontal: 16,
        marginVertical: 8,
        borderWidth: 2,
        borderColor: "#F6F6F6",
        borderRadius: 15,
    },
    cryptoContainer: {
        flexDirection: 'row',
        height: 36,
        marginTop: 9,
        marginLeft: 11,
    },
    cryptoLogo: {
        width: 36,
        height: 36,
    },
    cryptoText: {
        fontSize: 15,
        marginLeft: 12,
        alignSelf: 'center',
    },
    cryptoValueContainer: {
        marginLeft: 'auto',
        marginRight: 12,
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    cryptoValue: {
        fontSize: 15,
        color: '#495162',
    },
    cryptoValueChange: {
        fontSize: 12,
    },
    headerContainer: {
        flexDirection: 'row'
    },
    searchIcon: {
        padding: 10,
    }
})


export default TokenComponent