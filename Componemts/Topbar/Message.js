import React from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Dimensions,
    Text
  } from 'react-native';
  import { MaterialIcons } from '@expo/vector-icons';

const Message =()=>{
    return(
        <View style={{flex:1,
         alignContent:"center",
         backgroundColor:"rgb(255,67,0)",
         margin:20, borderColor:'black',borderWidth:10, borderRadius:10}}>
        
        <Text style={{color:'rgb(255,255,255)',padding:20, alignItems:'baseline'}}><MaterialIcons name="message" size={50} color="lime" /> {'\n'}I am learning react and react native</Text></View>
    )
}

export default Message