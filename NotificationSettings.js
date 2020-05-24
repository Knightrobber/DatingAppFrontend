import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableNativeFeedback,ScrollView,Switch}   from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class NotificationSettings extends Component{
    constructor(){
        super();
        this.state={
            switchValue:null,
            value1:0,value2:0,value3:0,value4:0,value5:0,value6:0,value7:0
            
            
        }
    }
    render(){
        return(
            <View style={Design1.container}>
                <ScrollView>
              
                 
                 
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
                         <Text style={Design1.textBeneath}>Message notifications</Text>
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

                    <View style={Design1.headerAndBar}>
                           <View style={Design1.header}>
                            <Text style={Design1.textBeneath}>Match notifications </Text>
                           </View>





                          
                           <View style={Design1.searchBar}>
                            <Text style={Design1.text}>
                                  New admirers
                                  </Text>
                            <Switch disabled={false} onValueChange={()=>{this.setState({value2:!(this.state.value2)})}} value={this.state.value2} onTintColor='#E9967A' thumbColor='#CD5C5C' />
                           </View>
                       
     
                          
       
                             
                           <View style={Design1.searchBar}>
         
                            <Text style={Design1.text}>
                                  New matches
                                  </Text>
                            <Switch disabled={false} onValueChange={()=>{this.setState({value3:!(this.state.value3)})}} value={this.state.value3} onTintColor='#E9967A' thumbColor='#CD5C5C' />
                           </View>
                         

                         
                           <View style={Design1.searchBar}>
                            <Text style={Design1.text}>
                                  Expiring matches
                                  </Text>
                            <Switch disabled={false} onValueChange={()=>{this.setState({value4:!(this.state.value4)})}} value={this.state.value4} onTintColor='#E9967A' thumbColor='#CD5C5C' />
                           </View>
                           <View>
                            <Text style={Design1.textBeneath}>Turning this off means you will miss out on your new and expiring matches</Text>
                        </View>

                         
                       </View>

                       <View style={Design1.headerAndBar}>
                        <View style={Design1.header}>
                         <Text style={Design1.textBeneath}>Tips</Text>
                        </View>
                        <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple()} onPress={()=>{this.props.navigation.navigate('AdvancedFilters')}}>
                        <View style={Design1.searchBar}>
                         <Text style={Design1.text}> Top profile tips </Text>
                          <Switch disabled={false} onValueChange={()=>{this.setState({value5:!(this.state.value5)})}} value={this.state.value5}onTintColor='#E9967A' thumbColor='#CD5C5C' />
                        </View>
                        </TouchableNativeFeedback  >
                        <View>
                            <Text style={Design1.textBeneath}>Turning this off will not allow you to recieve tips to maximise your chaces to geta date</Text>
                        </View>
                    </View>


                    <View style={Design1.headerAndBar}>
                           <View style={Design1.header}>
                            <Text style={Design1.textBeneath}>Other notifications </Text>
                           </View>





                          
                           <View style={Design1.searchBar}>
                            <Text style={Design1.text}>
                                  Bumble events
                                  </Text>
                            <Switch disabled={false} onValueChange={()=>{this.setState({value6:!(this.state.value6)})}} value={this.state.value6}onTintColor='#E9967A' thumbColor='#CD5C5C' />
                           </View>


                           <View style={Design1.searchBar}>
                            <Text style={Design1.text}>
                                  The good stuff
                                  </Text>
                            <Switch disabled={false} onValueChange={()=>{this.setState({value7:!(this.state.value7)})}} value={this.state.value7}onTintColor='#E9967A' thumbColor='#CD5C5C' />
                           </View>

                        </View>





                 
                 
              
                 </ScrollView>
                </View>
   
        );
    }
}

const Design1=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FAFAFA'
    },
    viewForMargin:{
        margin:15
    },
    briefing:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:"center",
        marginLeft:14
    },
    briefingText:{
        fontSize:16,
        color:'#AFAEAE'

    },
    searchBar:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:20,
        height:40,
        width:'98%',
        elevation:1,
        backgroundColor:'white',
        justifyContent:'space-between',
        marginBottom:3
       },
       searchBarN:{
           flexDirection:'row',
           alignItems:'center',
           borderRadius:20,
           height:40,
           width:350,
           elevation:1,
           backgroundColor:'white',
           justifyContent:'space-between',
           marginTop:15,
           marginBottom:20
          },
       
       textBeneath:{
           width:290,
           flexDirection:'column',
           marginLeft:14,
           marginTop:3,
           fontSize:12,
           color:'#AFAEAE'
          
       },
       headerAndBar:{
           marginTop:10
       },
   
   header:{
       alignItems:'flex-start',
       marginBottom:5,
       marginTop:5,
   
   },
       textInput:{
           marginTop:10,
           width:300,
           height:35,
           borderRadius:20,
           fontFamily:'superBold',
           fontSize:14,
           backgroundColor:'white',
          
           elevation:3
       },
       text:{
           marginLeft:13,
           color:'black',
           fontSize:16,
           fontWeight:'300'
       },
       lookupBar:{
        height:80,
        width:350,
        backgroundColor:'white',
        borderRadius:20,
        flexDirection:'column',
        justifyContent:'space-around',
        elevation:1
       },
       lookupRadius:{
           justifyContent:'space-between',
           marginTop:10,
      flexDirection:'row',
      alignItems:'center'
       },
       viewForSeperation:{
           borderBottomWidth:2,
           height:60,
           
       },
       sliderAndNumber:{
       flexDirection:'column'
       },
       preferredCity:{
           flexDirection:'row',
           justifyContent:'space-between',
           alignItems:'center'
       },
       preferredCityInput:{
           width:200,
           height:50,
      
           fontFamily:'robo'
       }
   
})

