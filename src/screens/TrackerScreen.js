import React from 'react'
import { Button, View, Text } from 'react-native';
import { TimeSelectComponent, TokenComponent } from '../components';
import SearchBarComponent from '../components/SearchBarComponent';

const TrackerScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <SearchBarComponent/>
            <TimeSelectComponent/>
            <TokenComponent/>
        </View>
    );
}

export default TrackerScreen