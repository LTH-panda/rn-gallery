import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from 'navigations/HomeStack';
import ProfileScreen from 'screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WriteScreen from 'screens/WriteScreen';
import {MainTabParamList} from './type';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#5c7cfa'}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: '피드',
          tabBarIcon: ({size, color}) => (
            <Icon name="home-filled" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Write"
        component={WriteScreen}
        options={{
          tabBarLabelStyle: {display: 'none'},
          tabBarStyle: {display: 'none'},
          tabBarIcon: () => (
            <Icon name="add-circle" size={40} color="#5c7cfa" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '프로필',
          tabBarIcon: ({size, color}) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
