import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {HomeStackNavigationScreenParams} from 'navigations/HomeStack/type';

export type MainTabParamList = {
  HomeStack: HomeStackNavigationScreenParams;
  Profile: undefined;
};

export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;
