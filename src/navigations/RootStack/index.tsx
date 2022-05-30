import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from 'screens/WelcomeScreen';
import SignInStack from 'navigations/SigInStack';
import RegisterStack from 'navigations/RegisterStack';
import MainTab from 'navigations/MainTab';
import WriteScreen from 'screens/WriteScreen';
import SettingScreen from 'screens/SettingScreen';
import {RootStackParamList} from './type';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignInStack" component={SignInStack} />
      <Stack.Screen name="RegisterStack" component={RegisterStack} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Write" component={WriteScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
