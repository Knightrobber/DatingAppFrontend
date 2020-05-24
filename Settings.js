import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Slider } from 'react-native';
import AdvancedFilters from './AdvancedFilters.js';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import SettingsMain from './SettingsMain.js';
import NotificationSettings from './NotificationSettings.js';

const StackNavigator=createStackNavigator({
   
   
    AdvancedFilters:{
        screen:AdvancedFilters,
        navigationOptions:{
            headerTitle:'dfgsdflh',
            
        }
    },
    SettingsMain:{
        screen:SettingsMain,
        navigationOptions:{
           header:null
        }
    },
    NotificationSettings:{
        screen:NotificationSettings,
        navigationOptions:{
            headerTitle:'Notification settings'
        }
    }
},
{
    initialRouteName:'SettingsMain'
}

);


  

const AppContainer=createAppContainer(StackNavigator);

export default class Settings extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <AppContainer/>
            </View>
        );
    }
}