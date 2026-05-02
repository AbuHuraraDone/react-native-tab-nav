import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeScreen } from './src/screens/HomeScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();
function App() {
  return (
  
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="blue" />
      <Tab.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: 'blue',margin:10, borderRadius: 20, height: 60, position: 'absolute', bottom:20 },
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: 'skyblue',
          tabBarLabelPosition: 'beside-icon',
          
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
          options={
            {
              tabBarIcon: ({color, size}) => (
                      <Ionicons name="home" color={color} size={size} />
                  ), 
            }
          } 
        />
        <Tab.Screen name="Settings" component={SettingsScreen}
           options={
            {
              tabBarIcon: ({color, size}) => (
                      <Ionicons name="settings" color={color} size={size} />
                  ), 
            }
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;