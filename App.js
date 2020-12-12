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

const HomeScreen = ({navigation}) => {
    let [value, setValue] = useState('');
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>Home</Text>
            <TextInput
                style={{width:200, height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => {setValue(text)}}
            />
            <Button
                onPress={() => { navigation.navigate('DetailScreen', {value: value})}}
                title="디테일로 이동"/>
        </View>
    )
}

const DetailScreen = ({route, navigation}) => {
    useEffect(() => {
        console.log('Detail Screen appear!');
        return () => {
            console.log('Detail Screen disappear!')
        }
    }, [navigation])
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:20}}>Detail Screen</Text>
            <Text style={{fontSize: 16, marginVertical: 8}}>Value from Home : {route.params.value}</Text>
            <Button
                onPress={() => { navigation.goBack() }}
                title="뒤로 이동" />
        </View>
    )
}

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
    <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
    <HomeStack.Screen name='DetailScreen' component={DetailScreen} />
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
            component={HomeNavigation} />
            <Tab.Screen name = "Settings" component={SettingsScreen} />
          </Tab.Navigator>
       </NavigationContainer>
    );
};

export default App;
