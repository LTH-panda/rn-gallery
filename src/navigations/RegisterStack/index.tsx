import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from 'screens/RegisterScreen';
import {RegisterStackParamList} from './type';

const Stack = createNativeStackNavigator<RegisterStackParamList>();

function RegisterStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default RegisterStack;
