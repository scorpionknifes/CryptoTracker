import React from 'react'
import { View } from 'react-native';
import { TimeSelectComponent, SearchBarComponent } from './components';

import { TokenScreen, TrackerScreen } from './screens'

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <SearchBarComponent />
            <TimeSelectComponent />
            <TrackerScreen/>
        </View>
    );
}

export default App