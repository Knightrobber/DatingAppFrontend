import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ScrollView,ImageBackground,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProfileMain extends Component{
    render(){
        return(
    <View style={Design.container}>
       
        <ScrollView>
           
         
          <View style={Design.profileBackground}>
              <ImageBackground source={require('./burrito.png')} style={Design.profileImage} imageStyle={{borderRadius:120}}>
              <TouchableOpacity onPress={()=> {this.props.navigation.navigate('EditProfile')}}>    
              <View style={{width:45,height:45,borderRadius:120,backgroundColor:'black',marginLeft:110,marginTop:110,alignItems:'center',justifyContent:'center'}}>
              <Image  source={require('./pen.png')} style={{height:35,width:35,borderRadius:120,borderWidth:1,borderColor:'black',color:'white'}} />
              </View>
              </TouchableOpacity>
              </ImageBackground>
              
              
              
              
              
              
              <View style={{flexDirection:'column',alignItems:'center'}}>
                  <Text style={{color:'white',fontSize:24,fontWeight:'600'}}> Sisir Reddy, 18</Text>
                  <View style={{flexDirection:'column',alignItems:'center'}}>
                   <Text style={{color:'white',fontSize:16,fontWeight:'300'}}>Project builder at EH</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                     <Text style={{color:'white',fontSize:16,fontWeight:'300'}}>Shiv Nadar University</Text>
                     <Text style={{color:'white',fontSize:16,fontWeight:'300'}}>, Delhi</Text>
                    </View>
                  </View>
              </View>
          </View> 

          <View style={Design.content}>
              <View style={Design.textBody}>
                  <Text style={Design.textLight}>City</Text>
                  <Text style={Design.textBlack}>Hyderabad</Text>

              </View>

              <View style={Design.textBody}>
                  <Text style={Design.textLight}>Phone no.</Text>
                  <Text style={Design.textBlack}>8978461951</Text>

              </View>

              <View style={Design.textBody}>
                  <Text style={Design.textLight}>Email</Text>
                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                   <Text style={Design.textBlack}>sisirreddy123@gmail.com</Text>
                   <Icon name='check-circle' size={20} color='green'/>
                  </View>

              </View>


              <View style={Design.textBody}>
                  <Text style={Design.textLight}>Gender</Text>
                  <Text style={Design.textBlack}>Male</Text>

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
                  </View>
          </View>
            
           
        





        
        </ScrollView>
    </View>
        );    
    }
}



 const Design=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    profileImage:{
        height:150,
        width:150,
        borderRadius:50,
   
},

    profileBackground:{
        backgroundColor:'black',
        height:300,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        margin:15
    },
    textBody:{
        height:50,
        flexDirection:'column',
       
        marginBottom:20,
        borderBottomWidth:1,
        borderColor:'#C8C6C6',
        justifyContent:'space-around'
    },
    textLight:{
        color:'grey',
        fontWeight:'400'
    },
    textBlack:{
        color:'black',
        fontWeight:'300',
        fontSize:16
    },
    noHeaderText:{
        height:30,
        alignItems:'flex-start',
        borderBottomWidth:1,
        borderColor:'#C8C6C6'
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
        fontFamily:'lightFont'
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