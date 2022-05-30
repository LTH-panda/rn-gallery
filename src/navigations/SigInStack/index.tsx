import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from 'screens/SignInScreen';
import {LoginStackParamList} from './type';

const Stack = createNativeStackNavigator<LoginStackParamList>();

function SignInStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}

export default SignInStack;
