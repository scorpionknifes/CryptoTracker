import React, { useState, useEffect, useContext } from 'react'
import { registerRootComponent } from 'expo';
import { View, BackHandler, Button } from 'react-native';
import { TimeSelectComponent, SearchBarComponent } from './components';
import { Ionicons } from '@expo/vector-icons';

import { TokenScreen, TrackerScreen } from './screens'
import TrackerProivider, { TrackerContext } from './context/TrackerContext';
import { TouchableOpacity } from 'react-native-gesture-handler';

const App = () => {
    const [scene, changeScene] = useState(true);

    useEffect(() => {
        const backAction = () => {
            if (scene) {
                BackHandler.exitApp()
            } else {
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
            <Body scene={scene} />
        </TrackerProivider>
    );
}

const Body = (props) => {
    const { darkTheme, setDarkTheme } = useContext(TrackerContext);
    return (<View style={{ flex: 1, backgroundColor: darkTheme ? 'black' : 'white' }}>
        <SearchBarComponent />
        <TimeSelectComponent />
        {props.scene ? <TrackerScreen /> : <TokenScreen />}
        <View style={{ borderWidth: 1, position: 'absolute', bottom: 0, alignSelf: 'flex-end' }}>
            <TouchableOpacity onPress={() => setDarkTheme(!darkTheme)}>
                <Ionicons name="ios-moon" size={24} color={darkTheme?'#F6F6F6' : '#495162'} />
            </TouchableOpacity>
        </View>
    </View>)
}

registerRootComponent(App);