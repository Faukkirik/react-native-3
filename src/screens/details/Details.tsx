import {useNavigation} from "@react-navigation/native";
import {Button, Text, View} from "react-native";
import React from "react";
import {useAppNavigation} from "../types/types";

export function DetailsScreen() {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button title={'Jump to Users screen'} onPress={() => {
                navigation.navigate('Home')
            }}/>
        </View>
    );
}