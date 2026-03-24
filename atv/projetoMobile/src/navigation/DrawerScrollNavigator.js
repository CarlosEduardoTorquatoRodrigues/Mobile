import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScrollTabsNavigator from './ScrollTabsNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerScrollNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#4CAF50',
        drawerInactiveTintColor: '#888',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="Scrolls"
        component={ScrollTabsNavigator}
        options={{
          title: 'Listas com Rolagem',
          drawerLabel: 'Listas com Rolagem',
        }}
      />
    </Drawer.Navigator>
  );
}