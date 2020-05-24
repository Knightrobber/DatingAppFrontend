import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

import {Design} from './Design.js';

export default class Body extends Component{
    render(){
        return(
         <View style={Design.body}>
          <View style={Design.profile}>
              <Image source={require('./burrito.png')} style={{height:150,width:150,borderRadius:120}}/>
              <View style={{backgroundColor:'yellow',borderRadius:6,height:30,width:80,}}>
                  <Text style={{fontSize:10,color:'black'}}>Edit Profile</Text>
              </View>
          </View>
          <View style={Design.info}></View>
         </View>
        );
    }
}