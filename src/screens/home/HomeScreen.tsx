import {useNavigation} from "@react-navigation/native";
import {Button, Text, View} from "react-native";
import React from "react";
import {useAppNavigation} from "../types/types";

export function HomeScreen() {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
}