import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {Icon}  from 'react-native-vector-icons/FontAwesome'


export default class NavBar extends Component{
    render(){
        return(
            <View style={Design1.NavBar}>
             <View style={Design1.messages}>
                 
             </View>
             <View style={Design1.title}></View>
             <View style={Design1.profile}></View>   
            </View>
        );
    }
}

const Design1= StyleSheet.create({
    Navbar:{
        height:80,

    }
})