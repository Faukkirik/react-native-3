import React from "react";
import {NestedStack, useAppNavigation} from "../types/types";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainScreen} from "./main/Main";
import {MainDetailsScreen} from "./main-details/MainDetails";

const Stack = createNativeStackNavigator<NestedStack>();
export function UsersScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Main'} component={MainScreen}/>
            <Stack.Screen name={'MainDetails'} component={MainDetailsScreen}/>
        </Stack.Navigator>
    );
}