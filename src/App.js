import React from 'react'
import { registerRootComponent } from 'expo';
import { View } from 'react-native';
import { TimeSelectComponent, SearchBarComponent } from './components';

import { TokenScreen, TrackerScreen } from './screens'

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <SearchBarComponent />
            <TimeSelectComponent />
            <TokenScreen/>
        </View>
    );
}

registerRootComponent(App);