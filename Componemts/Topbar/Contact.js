import React , { Fragment }from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    ScrollView,
    Dimensions,
    Text
  } from 'react-native';
  import { Entypo } from '@expo/vector-icons'; 
  import { FontAwesome } from '@expo/vector-icons';
  import { Ionicons } from '@expo/vector-icons';
  import { MaterialCommunityIcons } from '@expo/vector-icons';

const Contact =()=>{
    return(


        <Fragment>
             
        <View style={{ margin:20,elevation: 2}}>                
            <Text style ={{ fontSize: 20,
            padding:10,
            fontWeight: "bold"}}>
            <Entypo style={{ margin:3, alignItems: 'space-around'}} name="location" size={30} color="black" />  Anakaputhur</Text>
        </View>        
    
        <View style={{ margin:20,elevation: 2}}>
        <Text style ={{ fontSize: 20,
                padding:10,
                fontWeight: "bold"}}>
            <FontAwesome name="phone" size={30} color="black" />  7904457579</Text>
         </View>
    
        <View style={{ margin:20,elevation: 2}}>
        <Text style ={{ fontSize: 20,
                padding:10,
                fontWeight: "bold"}}>
            <Ionicons name="mail-sharp" size={30} color="black" />  elumalai620758@gmail.com</Text>
         </View>

         <View style={{ margin:20,elevation: 2}}>
        <Text style ={{ fontSize: 20,
                padding:10,
                fontWeight: "bold"}}>
            <MaterialCommunityIcons name="web" size={24} color="black" />  No website</Text>
         </View>

 

        </Fragment>


        



    )
}

export default Contact