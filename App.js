        import { StatusBar } from 'expo-status-bar';
        import React, { Fragment } from 'react';
        import {StyleSheet} from 'react-native';
        import { NavigationContainer } from '@react-navigation/native';
        import { createNativeStackNavigator } from '@react-navigation/native-stack';
        import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
        import HomeScreen from './Componemts/Home';
        import Topnavigation from './Componemts/Topbar';
       

      
        const mynavstack = createNativeStackNavigator();


        export default function App() {
          return (
           
              <NavigationContainer>
                <mynavstack.Navigator initialRouteName='base'>
                  <mynavstack.Screen name="base" 
                   component={HomeScreen} 
                   options={{ headerShown: false }}
                   />
                  <mynavstack.Screen name="Topnavigation" 
                   component={Topnavigation}                   
                   />                   
                </mynavstack.Navigator>
              </NavigationContainer>
                                 
          )
           }

       