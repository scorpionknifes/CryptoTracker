import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const TokenComponent = () => {
    return <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.cryptoContainer}>
                <Image
                    style={styles.cryptoLogo}
                    source={{uri:"https://static.sylo.io/tokens/ETHEREUM_USDC.png"}}
                />
                <Text>Sylo</Text>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 140,
        marginHorizontal: 16,
        marginVertical: 8,
        borderWidth: 2,
        borderColor: "#F6F6F6",
        borderRadius: 15,
    },
    cryptoContainer: {
        flexDirection: 'row',
    },
    cryptoLogo: {
        width:36,
        height: 36,
    },
    cryptoText: {
        fontSize: 15,
    },
    headerContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    searchIcon: {
        padding: 10,
    }
})


export default TokenComponent