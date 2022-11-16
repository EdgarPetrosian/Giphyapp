import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Type checking screens
export enum RouteNames {
  // Tabs
  RANDOMGIFS = 'Randomgifs',
  SEARCHGIF = 'Searchgif',
}

export type RootStackParamList = {
  //Tabs
  [RouteNames.RANDOMGIFS]: undefined;
  [RouteNames.SEARCHGIF]: undefined;
};

export type MainNavigationProp<
  RouteName extends keyof RootStackParamList = RouteNames,
> = NativeStackNavigationProp<RootStackParamList, RouteName>;

export const Tab = createBottomTabNavigator<RootStackParamList>();
