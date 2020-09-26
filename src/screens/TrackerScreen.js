import React from 'react'
import { Button, View, Text } from 'react-native';

const TrackerScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
            />
        </View>
    );
}

export default TrackerScreen