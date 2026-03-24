import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ModalTabsNavigator from './ModalTabsNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerModalNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#2196F3',
        drawerInactiveTintColor: '#888',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="Modals"
        component={ModalTabsNavigator}
        options={{
          title: 'Modais',
          drawerLabel: 'Modais',
        }}
      />
    </Drawer.Navigator>
  );
}