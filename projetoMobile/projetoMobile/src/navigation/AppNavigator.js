import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DrawerModalNavigator from './DrawerModalNavigator';
import DrawerScrollNavigator from './DrawerScrollNavigator';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#2196F3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: '#2196F3',
        drawerInactiveTintColor: '#888',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Início',
          drawerLabel: 'Início',
        }}
      />
      <Drawer.Screen
        name="Modals"
        component={DrawerModalNavigator}
        options={{
          title: 'Modais',
          drawerLabel: 'Modais',
        }}
      />
      <Drawer.Screen
        name="Scrolls"
        component={DrawerScrollNavigator}
        options={{
          title: 'Listas com Rolagem',
          drawerLabel: 'Listas com Rolagem',
        }}
      />
    </Drawer.Navigator>
  );
}