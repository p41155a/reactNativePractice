/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
    Button,
    View,
    Text,
    TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppleListScreen from "./AppleList";
import AppleDetailScreen from "./AppleDetail";

const SettingsScreen = () => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Setting Screen</Text>
    </View>
  )
}

const HomeStack = createStackNavigator();
const HomeNavigation = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='HomeScreen' component={AppleListScreen} />
    <HomeStack.Screen name='DetailScreen' component={AppleDetailScreen} />
  </HomeStack.Navigator>
)
const Tab = createBottomTabNavigator();

const App = () => {
    return (
       <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen 
              name = "Home"
              options={{
                tabBarIcon: () => (<Ionicons 
                  name="film-outline" size={28}/>) 
              }}
              component={HomeNavigation}
            />
            <Tab.Screen name = "Settings" component={SettingsScreen} />
          </Tab.Navigator>
       </NavigationContainer>
    );
};

export default App;
