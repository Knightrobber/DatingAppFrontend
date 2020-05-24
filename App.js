/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavBar from './NavBar.js'
import {Design} from './Design.js';
import Body from './Body.js';
import { createMaterialTopTabNavigator,createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Settings from './Settings.js';
import EditProfile from './EditProfile.js';
import Feed from './Feed.js';
import Messages from './Messages.js';
import Profile from './Profile.js';
import Form from './Form123456789.js';
import Maps from './Maps.js';


const TopTabNavigator=createMaterialTopTabNavigator({
 Settings:{
screen: Settings,
navigationOptions:{
    tabBarOptions:{
      activeTintColor:'red',
      showIcon:true,
      showLabel:false,
    },
    tabBarIcon:({tintColor})=>(<Icon name='cog' size={20} color={tintColor}/>),
  
    
    
},
},

Profile:{
  screen:Profile,
  navigationOptions:{
    tabBarOptions:{
      activeTintColor:'red',
      showIcon:true,
      showLabel:false
    },
    tabBarIcon:({tintColor})=>(<Icon name='user-circle' size={20} color={tintColor}/>)
  }
},


Feed:{
  screen:Feed,
  navigationOptions:{
    tabBarOptions:{
      activeTintColor:'red',
      showIcon:true,
      showLabel:false
    },
    tabBarIcon:({tintColor})=>(<Icon name='accusoft' size={20} color={tintColor}/>)
  }
},
Form:{
  screen:Form,
  navigationOptions:{
    header:null
  }
},
Maps:{
  screen:Maps,
  navigationOptions:{
    header:null
  }
},



Messages:{
  screen:Messages,
  navigationOptions:{
    
    tabBarOptions:{
      activeTintColor:'red',
      showIcon:true,
      showLabel:false,
      
    },
    tabBarIcon:({tintColor})=>(<Icon name='comments' size={20} color={tintColor}/>)
    
  }
},


  
},
{
  initialRouteName:'Messages',
    tabBarOptions:{
      style:{
        backgroundColor:'white'
      }
    },


}
);


const AppContainer=createAppContainer(TopTabNavigator);



export default class App extends Component{
  render(){
    return(
      <View style={Design.container}>
       <AppContainer/>
       
        
       
      </View>
    );
  }
}