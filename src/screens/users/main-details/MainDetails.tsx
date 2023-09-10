import {Text, View} from "react-native";
import React from "react";
import {MainDetailsPropsType} from "../../types/types";

export function MainDetailsScreen({route}: MainDetailsPropsType) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>{route.params.id}</Text>
            <Text>{route.name}</Text>
        </View>
    );
}