
        import React, { Fragment } from "react";
        import {Text, View, Button, Image} from 'react-native';
        import Intro from "./Topbar/intro";
        import Contact from "./Topbar/Contact";
        import Message from "./Topbar/Message";       
        import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';       
        const tab = createMaterialTopTabNavigator();

        function Topnavigation(){
                return(                        
                <Fragment>
                        <View style={{flex:.5,
                                        backgroundColor:'rgb(126,140,245)'}}>
                                <Image style={{flex: 1,
                                        width: null,
                                        height: null,
                                        resizeMode: 'contain',
                                        opacity: 0.35, }}
                                        source={require('././asset/elu02.png.png')} />
                                <Image style={{maxWidth: 100,
                                        height: 'auto',
                                        position: 'absolute',
                                        top:40,
                                        left: 145,
                                        width: 100, 
                                        height: 100, 
                                        borderRadius: 100/ 2,
                                        
                                        }} source={require('././asset/elu02.png.png')} />
                        </View>
                        
                        
                                <tab.Navigator  initialRouteName='Contact'
                                   tabBarOptions={{
                                        pressColor: 'green',
                                        pressOpacity: 1,
                                        labelStyle: {
                                          fontSize: 23,
                                          fontWeight:'bold',
                                          textTransform:'none',                                                                                   
                                        },
                                        style: {
                                          backgroundColor: 'white',
                                          height: 60,
                                          elevation: 2,                                          
                                        },
                                        indicatorStyle: {
                                          backgroundColor: '#FBC200',
                                          height: 5,
                                        },
                                        tabStyle: {width: 'auto', marginLeft: 10, marginRight: 10, alignItems: 'space-around'},
                                      }}>
                                
                                
                                        <tab.Screen name="Intro" component={Intro} 
                                         />
                                        <tab.Screen name="Contact" component={Contact}/>
                                        <tab.Screen name="Messages" component={Message}/> 
                                 </tab.Navigator>

                 </Fragment>
                     
                )
        }


        export default Topnavigation