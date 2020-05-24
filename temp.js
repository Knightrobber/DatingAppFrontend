import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Settings extends Component{
    render(){
        return(
    <View style={Design.container}>
        <View style={{margin:30}}>
           <View style={Design.profile}>
              <Image source={require('./burrito.png')} style={Design.profileImage}/>
              <View style={Design.editProfile}>
                  <Text style={{fontSize:16,color:'black',marginLeft:7,fontFamily:'superBold'}}>Edit Profile</Text>
                  <Icon name='edit' size={25} style={{marginRight:7}}  />
              </View>
           </View>
           <View style={Design.info}>
              <View style={Design.textAndInput}> 
               <Text style={Design.text}>Name</Text>
               <Text style={Design.textInput}> Sisir Reddy</Text>
              </View>

              <View style={Design.textAndInput}> 
               <Text style={Design.text}>Age</Text>
               <Text style={Design.textInput}> 19</Text>
              </View>

              <View style={Design.textAndInput}> 
               <Text style={Design.text}>College</Text>
               <Text style={Design.textInput}> Shiv Nadar University </Text>
              </View>

              <View style={Design.textAndInput}> 
               <Text style={Design.text}>Profession</Text>
               <Text style={Design.textInput}> Marketer at EH </Text>
              </View>
              
              <View style={Design.promo}>
                  <View style={Design.promoImg}>
                    <View style={{alignItems:'center',flexDirection:'row'}}>  
                     <Image source={require('./tinderKink.png')} style={{height:50,width:50,borderRadius:15}}/>
                     <View style={{flexDirection:'row'}}>
                     <Text style={{fontSize:30,fontWeight:'bold',color:'black'}}>Tinder</Text>
                     <Text style={{fontSize:30,fontWeight:'bold',color:'red'}}>Pro</Text>
                     </View>
                    </View>
                    <View style={{marginLeft:5,marginTop:8}}>
                        <Image source={require('./pro1.png')} style={{width:30,height:15,borderRadius:18}}/>
                    </View>
                  </View>

                  <View style={Design.promoImg}>
                    <View style={{alignItems:'center',flexDirection:'row'}}>  
                     <Image source={require('./tinderGo.png')} style={{height:50,width:50,borderRadius:15}}/>
                     <View style={{flexDirection:'row'}}>
                     <Text style={{fontSize:30,fontWeight:'bold',color:'black'}}>Tinder</Text>
                     <Text style={{fontSize:30,fontWeight:'bold',color:'green'}}>Plus</Text>
                     </View>
                    </View>
                    <View style={{marginLeft:5,marginTop:8}}>
                        <Image source={require('./plus.png')} style={{width:30,height:15,borderRadius:18}}/>
                    </View>
                  </View>

              </View>
             
           </View>
        </View>
    </View>
        );    
    }
}



 const Design=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    
    
    profile:{
    flexDirection:'column',
    alignItems:'center'
    },
    editProfile:{
        marginTop:5,
        backgroundColor:'lightgrey',
        borderRadius:18,
        height:30,
        width:125,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    profileImage:{
        height:150,width:150,borderRadius:120
    },
    info:{
        marginTop:30
    },
    textAndInput:{
     flexDirection:'row',
     alignItems:'center',
     height:60,
     justifyContent:'space-between',
     
     borderBottomWidth:1
    },
    text:{
        marginLeft:20,
        color:'black',
        fontSize:20,
        fontWeight:'3002'
    },
    textInput:{
    
     fontFamily:'lightFont',
     fontSize:28,
     color:'black',
     fontWeight:'200',
     marginRight:30

    },
    promo:{
        alignItems:'center',
        flexDirection:'column',
        marginTop:20
    },
    promoImg:{
      
        flexDirection:'row',
        width:250,
        borderRadius:15,
        alignItems:'center',
        backgroundColor:'white',
        elevation:3,
        marginLeft:15,
        marginBottom:15

    }
})