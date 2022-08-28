import React, { Fragment } from "react";
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

const Intro =()=>{
    return(
        
        <ScrollView>
             <View>
            <Text style={{textAlign:'justify',margin:5, fontSize: 20,}}>
                <Text style={{fontWeight: "bold",color:'blue', }}>Self Intro:</Text>{'\n'}
                {'\t'} {'\t'} {'\t'}Thank you for giving me this wonderful opportunity to introduce myself. {'\n'}
                my name is elumalai. i am from anakaputhur, chennai.{'\n'}
                <Text style={{fontWeight: "bold",color:'blue'}}>Education:</Text>{'\n'}
                {'\t'} {'\t'} {'\t'}
                i did my schooling at govt.hr.sec school, anakaputhur. {'\n'}
                i have a degree in Bsc maths from A.M.Jain college Meenambakkam.{'\n'}

                <Text style={{fontWeight: "bold",color:'blue'}}>Strength:</Text>{'\n'}

                {'\t'} {'\t'} {'\t'}

                i consider myself as a positive thinker. it helps me to achieve my goals with the help of positive thinking,{'\n'} 
                i can overcome the stress and i can adopt easily in any type of environment.{'\n'}
                i like to learn new thinks, i never miss any oportunities to learn somthing new{'\n'}

                i am a self motiveted person. it helps me to stay positive in all situations.
            </Text>
        </View>

        </ScrollView>
       

       

       
        
            
    )
}

export default Intro