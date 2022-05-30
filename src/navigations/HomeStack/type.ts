import {CompositeNavigationProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {MainTabNavigationProp} from 'navigations/MainTab/type';

export type HomeStackParamList = {
  Feed: undefined;
  Post: undefined;
  Profile: undefined;
};

export type HomeStackNavigationProp = CompositeNavigationProp<
  MainTabNavigationProp,
  NativeStackNavigationProp<HomeStackParamList>
>;

export type HomeStackNavigationScreenParams =
  NativeStackScreenProps<HomeStackParamList>;
