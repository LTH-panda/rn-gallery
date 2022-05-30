import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FeedScreen from 'screens/FeedScreen';
import PostScreen from 'screens/PostScreen';
import ProfileScreen from 'screens/ProfileScreen';
import {HomeStackParamList} from './type';

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
