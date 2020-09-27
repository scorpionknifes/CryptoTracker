import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import GraphComponent from './GraphComponent';

const TokenComponent = (props) => {

    const {  } = props;

    return <TouchableOpacity style={styles.tokenContainer}>
        <View style={styles.headerContainer}>
            <View style={styles.cryptoContainer}>
                <Image
                    style={styles.cryptoLogo}
                    source={{uri:"https://static.sylo.io/tokens/ETHEREUM_USDC.png"}}
                />
                <Text style={styles.cryptoText}>Sylo</Text>
            </View>
            <View style={styles.cryptoValueContainer}>
                <Text style={styles.cryptoValue}>$0.0218</Text>
                <Text style={styles.cryptoValueChange}>+4.48% ($0.0097)</Text>
            </View>
        </View>
        <GraphComponent/>
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
        width:36,
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
        color: '#33BB5D',
    },
    headerContainer: {
        flexDirection: 'row'
    },
    searchIcon: {
        padding: 10,
    }
})


export default TokenComponent