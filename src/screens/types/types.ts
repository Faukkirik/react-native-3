import {NavigationProp, useNavigation, NavigatorScreenParams} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Details: undefined;
    Users: NavigatorScreenParams<NestedStack>
};
// export type UsersPropsType = NativeStackScreenProps<RootStackParamList, 'Users'>
export type NestedStack = {
    Main: undefined
    MainDetails: undefined
}
type UseNavigationType = NavigationProp<RootStackParamList>
export const useAppNavigation = () => useNavigation<UseNavigationType>()