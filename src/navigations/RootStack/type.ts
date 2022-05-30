import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  SignInStack: undefined;
  RegisterStack: undefined;
  MainTab: undefined;
  Write: undefined;
  Setting: undefined;
  Welcome: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
