import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import  {createStackNavigator,createAppContainer} from 'react-navigation';
import ProfileMain from './ProfileMain.js'
import EditProfile from './EditProfile.js'
const  StackNavigator=createStackNavigator({
       ProfileMain:{
           screen:ProfileMain,
           navigationOptions:{
               header:null
           }
       },
       EditProfile:{
           screen:EditProfile,
           navigationOptions:{
               header:null
           }
       }
},{
    initialRouteName:'ProfileMain'
});

const AppContainer=createAppContainer(StackNavigator);
export default class Profile extends Component{
    render(){
        return(
            <View style={{flex:1}}>

             <AppContainer/>
            </View>

        );
    }
}