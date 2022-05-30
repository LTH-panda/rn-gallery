import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from 'navigations/HomeStack';
import ProfileScreen from 'screens/ProfileScreen';
import {MainTabParamList} from './type';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;
