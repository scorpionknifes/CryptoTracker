import React, { useContext } from 'react'
import _ from 'lodash';
import HorizontalScrollPicker from './HorizontalScrollPicker'
import { StyleSheet, View } from 'react-native'
import { TrackerContext } from '../context/TrackerContext';

const times = ['all', 'year', 'month', 'week', 'day'];

const timeItems = _.map(times, (time, idx) => {
    return {
        label: time,
        value: idx
    }
});

const TimeSelectComponent = () => {
    const { setTime } = useContext(TrackerContext);
    return <View style={styles.container} >
        <HorizontalScrollPicker
            items={timeItems}
            onSelect={item => setTime(times[item])}
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