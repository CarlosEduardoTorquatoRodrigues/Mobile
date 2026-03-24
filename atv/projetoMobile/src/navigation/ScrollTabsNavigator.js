import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScrollViewScreen from '../screens/scroll/ScrollViewScreen';
import FlatListScreen from '../screens/scroll/FlatListScreen';
import SectionListScreen from '../screens/scroll/SectionListScreen';

const Tab = createBottomTabNavigator();

export default function ScrollTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: '#888',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen 
        name="ScrollView" 
        component={ScrollViewScreen}
        options={{
          title: 'ScrollView',
          tabBarLabel: 'SCROLL',
        }}
      />
      <Tab.Screen 
        name="FlatList" 
        component={FlatListScreen}
        options={{
          title: 'FlatList',
          tabBarLabel: 'FLAT',
        }}
      />
      <Tab.Screen 
        name="SectionList" 
        component={SectionListScreen}
        options={{
          title: 'SectionList',
          tabBarLabel: 'SECTION',
        }}
      />
    </Tab.Navigator>
  );
}