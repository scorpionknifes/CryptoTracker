import React from 'react'
import _ from 'lodash';
import HorizontalScrollPicker from './HorizontalScrollPicker/HorizontalScrollPicker'
import { StyleSheet, View } from 'react-native'

const timeItems = _.map(['all', 'year', 'month', 'week', 'day'], (time, idx) => {
    return {
        label: time,
        value: idx
    }
});

const TimeSelectComponent = () => {
    return <View style={styles.container} >
        <HorizontalScrollPicker
            items={timeItems}
            onSelect={() => console.log("selected")}
            initialIdx={2}
            rowItems={5}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 21,
        marginBottom: 8,
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

export default TimeSelectComponent