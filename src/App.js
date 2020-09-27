import React, { useState, useEffect } from 'react'
import { registerRootComponent } from 'expo';
import { View, BackHandler } from 'react-native';
import { TimeSelectComponent, SearchBarComponent } from './components';

import { TokenScreen, TrackerScreen } from './screens'
import TrackerProivider from './context/TrackerContext';

const App = () => {
    const [scene, changeScene] = useState(true);

    useEffect(() => {
        const backAction = () => {
            if (scene) {
                BackHandler.exitApp()
            }else{
                changeScene(false)
            }
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);

    return (
        <TrackerProivider changeScene={changeScene}>
            <View style={{ flex: 1 }}>
                <SearchBarComponent />
                <TimeSelectComponent />
                {scene ? <TrackerScreen /> : <TokenScreen />}
            </View>
        </TrackerProivider>
    );
}

registerRootComponent(App);