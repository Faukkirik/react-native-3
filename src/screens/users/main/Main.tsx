import {FlatList, ListRenderItem, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import {arr, ObjType} from "../../../data/data";
import {useAppNavigation} from "../../types/types";

export function MainScreen() {
    const navigation = useAppNavigation()
    const render: ListRenderItem<ObjType> =({item})=>{
        return (
            <View>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Users', {screen: 'MainDetails', params: {id: item.id}})
                }}>
                    <Text>{item.name}</Text>
                    <Text>{item.age}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FlatList
                data={arr}
                renderItem={render}
                keyExtractor={(item)=>item.id.toString()}
            />
        </View>
    );
}