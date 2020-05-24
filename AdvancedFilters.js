import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class AdvancedFilters extends Component{
    render(){
        return(
            <View style={{flex:1}}>
             <View style={Design1.briefing}>
                     
                     
                     <Text style={Design1.briefingText}>
                         Choose what activities matter to you 
                     </Text>
                     <Text style={Design1.briefingText}>
                     to keep in touch with them
                     </Text>
                  </View>  

                  <View style={Design1.headerAndBar}>
                        <View style={Design1.header}>
                         <Text style={Design1.textBeneath}>What's their height?</Text>
                        </View>
                        <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple()} onPress={()=>{this.props.navigation.navigate('AdvancedFilters')}}>
                        <View style={Design1.searchBar}>
                         <Text style={Design1.text}>New messages </Text>
                         <Switch disabled={false} onValueChange={()=>{this.setState({value1:!(this.state.value1)})}} value={this.state.value1} onTintColor='#E9967A' thumbColor='#CD5C5C' />
                        </View>
                        </TouchableNativeFeedback  >
                        <View>
                            <Text style={Design1.textBeneath}>Turning this off will not allow you to recieve any new messages</Text>
                        </View>
                    </View>
            </View>
        );
    }
}