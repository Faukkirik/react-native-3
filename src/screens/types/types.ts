import {NavigationProp, useNavigation, NavigatorScreenParams, CompositeScreenProps} from "@react-navigation/native";
import type {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import type {StackScreenProps} from '@react-navigation/stack'
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Details: undefined;
    Users: NavigatorScreenParams<NestedStack>
};
// export type UsersPropsType = NativeStackScreenProps<RootStackParamList, 'Users'>
export type NestedStack = {
    Main: undefined
    MainDetails: {
        id: number
    }
}
export type MainDetailsPropsType_ = NativeStackScreenProps<NestedStack, 'MainDetails'>
export type MainDetailsPropsType = CompositeScreenProps<BottomTabScreenProps<NestedStack, 'MainDetails'>, StackScreenProps<RootStackParamList>>
type UseNavigationType = NavigationProp<RootStackParamList>
export const useAppNavigation = () => useNavigation<UseNavigationType>()