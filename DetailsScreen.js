import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,TouchableOpacity,ScrollView,Button,TouchableNativeFeedback} from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Feather';


export default class DetailsScreen extends Component{
    constructor(){
        super();
        this.state={
            number:1
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                  <TouchableNativeFeedback onPress={()=>{this.setState({number:2})}}>
                  <Text>{this.state.number}</Text>
                  </TouchableNativeFeedback>
            </View>

        );
    }
}