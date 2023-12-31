import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import React from "react";
import {Main} from "./src/Main";
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Main/>
                <StatusBar style="auto"/>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});
