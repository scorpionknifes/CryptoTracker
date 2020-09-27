import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { TokenComponent } from '../components';

const TrackerScreen = () => {
    return (
        <ScrollView>
            <TokenComponent/>
            <TokenComponent/>
            <TokenComponent/>
            <TokenComponent/>
            <TokenComponent/>
            <TokenComponent/>
            <TokenComponent/>
            <TokenComponent/>
        </ScrollView>
    );
}

export default TrackerScreen