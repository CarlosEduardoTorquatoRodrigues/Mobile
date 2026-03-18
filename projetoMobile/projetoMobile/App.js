import React from 'react'; 
import { View, Text } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomModalScreen from './src/components/CustomModal.js';
 
const Drawer = createDrawerNavigator(); 
 
function Modal() { 
    return ( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
            <Text>Modal</Text>
             {() => <CustomModalScreen animation="fade" themeColor="#4CAF50" />} 
        </View> 
    ); 
}
function Scroll() { 
    return ( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
            <Text>Scroll</Text> 
        </View> 
    ); 
}


    
export default function App() { 
    return ( 
        <NavigationContainer> 
            <Drawer.Navigator> 
                <Drawer.Screen name="Modal" component={Modal} />
                <Drawer.Screen name="Scroll" component={Scroll} /> 
            </Drawer.Navigator> 
        </NavigationContainer> 
        
    ); 
}