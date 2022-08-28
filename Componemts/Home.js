        import React, { Fragment } from "react";
        import {Text, View, Button, StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native';
        import { getParseTreeNode } from "typescript";
      
        const NavigateTotopbar = props =>{
            props.navigation.navigate('Topnavigation')
        }
       
       
        const HomeScreen = props => {
            return (
                  <SafeAreaView style={styles.container}>
                  <View style={{flex:1,justifyContent: "center",alignItems:"center",backgroundColor:'pink' }}>
                  <TouchableOpacity
                    onPress={() => NavigateTotopbar(props)}
                    style={{alignItems: "center",
                    backgroundColor: "rgb(136,207,236)",
                    padding: 10}}>
                    <Text
                      style={{
                        fontSize: 20,
                        alignSelf: 'center',
                        color:'green',
                      }}>
                      Go to TopbarNavigation
                    </Text>
                  </TouchableOpacity>
                  </View>
              
              </SafeAreaView>                         
                  );
                  }

          export default HomeScreen


          const styles = StyleSheet.create({
            container: {
              flex: 1,
            }})

          