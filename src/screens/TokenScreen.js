import React, { useContext, useEffect, useState } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import GraphGradientComponent from '../components/GraphGradientComponent';
import { TrackerContext } from '../context/TrackerContext';
import { percentageIncrease } from '../components/TokenComponent';
import axios from 'axios';

const TokenScreen = () => {
    const { header, time, selectedID } = useContext(TrackerContext)
    const [data, setData] = useState(null)

    useEffect(() => {
        const getAsset = async () => {
            try {
                const { data } = await axios.get(`https://assets-api.sylo.io/v2/asset/id/${selectedID}/rate?fiat=NZD&period=${time}&type=historic`)
                setData(data)
            } catch (e) {
                console.log(e)
            }
        }
        getAsset()
    }, [time])


    return <ScrollView>
        <View style={styles.graphContainer}>
            <View style={styles.cryptoContainer}>
                    <Text style={styles.cryptoValue}>{data?.rate? <>${`${data?.rate}`.substring(0, 6)}</>: <></>}</Text>
                {percentageIncrease(data?.history)}
            </View>

            <GraphGradientComponent data={data}/>
        </View>
        <View style={styles.informationContainer}>
            <Text style={styles.informationTitle}>Information</Text>
            <View style={styles.informationTable}>
                <View style={styles.informationRow}>
                    <Text style={styles.informationLabel}>Symbol:</Text>
                    <Text style={styles.informationText}>{header?.symbol}</Text>
                </View>
                <View style={styles.informationRow}>
                    <Text style={styles.informationLabel}>Market Cap:</Text>
                    <Text style={styles.informationText}>${data?.market_cap?.toFixed(2)} NZD</Text>
                </View>
                <View style={styles.informationRow}>
                    <Text style={styles.informationLabel}>24h Volume:</Text>
                    <Text style={styles.informationText}>${data?.volume_24h?.toFixed(2)} NZD</Text>
                </View>
            </View>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    graphContainer: {
        width: Dimensions.get('window').width - 32,
        height: 185,
        marginHorizontal: 24,
        marginVertical: 8,
        borderWidth: 2,
        borderColor: '#F6F6F6',
        overflow: 'hidden',
        borderRadius: 15,
    },
    cryptoContainer: {
        alignItems: 'center',
        height: 36,
        marginTop: 12,
        marginBottom: 13,
    },
    cryptoValue: {
        fontSize: 18,
        color: '#495162',
    },
    cryptoValueChange: {
        fontSize: 12,
        color: '#33BB5D',
    },
    informationContainer: {
        alignItems: 'center',
        marginTop: 23,
    },
    informationTable: {
        width: Dimensions.get('window').width - 68,
        marginHorizontal: 34,
        fontSize: 15,
    },
    informationRow: {
        fontSize: 15,
        marginBottom: 12,
        flexDirection: 'row'
    },
    informationTitle: {
        fontSize: 15,
        marginBottom: 12,
        color: '#495162'
    },
    informationLabel: {
        width: 87,
        marginRight: 15,
        color: '#8A96AA',
    },
    informationText: {
        color: '#8A96AA',
    },
})

export default TokenScreen