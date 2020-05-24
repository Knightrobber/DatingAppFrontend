import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,TouchableOpacity,ScrollView,Button,TouchableNativeFeedback} from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Feather';


export default class ChattingScreen extends Component{
    constructor(){
        super();
        this.state={
            width:25,
            sendWidth:0,
            inputToFunction:'',
            detailsModal:0,
            heightInput:0,
            heightMessageBar:80,
            heightSearchBar:40,
    
        }
        
        
    }
    isEmpty=(input)=>{
        if(input==''){
            this.setState({sendWidth:'0%',width:25})
        }
        else{
            this.setState({sendWidth:'80%',width:0})
        }

    }
    render(){
        return(
            <View style={Design.container}>
               <View style={Design.body}>
                   <View style={{justifyContent:'flex-end',flexDirection:'row'}}>
                       <Text style={Design.sentMessage}>Hi how are you?</Text>
                   </View>
                   <View style={{justifyContent:'flex-end',flexDirection:'row'}}>
                       <Text style={Design.sentMessage}>wass up</Text>
                   </View>
                   <View style={{justifyContent:'flex-end',flexDirection:'row'}}>
                       <Text style={Design.sentMessage}>color better blue</Text>
                   </View>
                   <View style={{justifyContent:'flex-end',flexDirection:'row'}}>
                       <Text style={Design.sentMessage}>velvet</Text>
                   </View>
                   




               </View>






            <View style={{height:this.state.heightMessageBar1,maxHeight:100,backgroundColor:'white'}}>
               
               <View style={Design.messageBar}>
                   <View style={{width:'7%'}}>
                   <Icon2 name='plus' size={30}/>
                   </View>
                   <View style={[Design.searchBar,{height:this.state.heightSearchBar,maxHeight:90}]}>
                       <TextInput  ref={input => { this.textInput = input }}   
                       placeholder='Message' style={{width:'80%',fontSize:17,height:this.state.heightInput,maxHeight:90}} 
                       onChangeText={(input)=>{this.setState({inputToFunction:input});this.isEmpty(input)}} 
                       onSubmitEditing={()=>{this.textInput.clear();this.setState({width:25,sendWidth:'0%'})}}
                       multiline={true} 
                       onContentSizeChange={(event)=>{this.setState({
                           heightInput:event.nativeEvent.contentSize.height,
                           heightSearchBar:event.nativeEvent.contentSize.height,
                           heightMessageBar:event.nativeEvent.contentSize.height})}}
                      />

                       <View style={{flexDirection:'row',width:'20%',justifyContent:'space-around',alignItems:'center'}}>
                           <View style={{width:this.state.sendWidth,alignItems:'center',flexDirection:'row',justifyContent:'flex-end'}}>
                           
                           <Text style={{fontSize:18,color:'blue'}}>Send</Text>
                           </View>
                       <Icon2 name='camerao' size={25} style={{width:this.state.width}}/>
                       <Icon3 name='mic' size={25} style={{width:this.state.width}}/>
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
        flex:1
    },
   body:{
       flex:1,
       marginTop:10
      

   },
   messaging:{
       
       backgroundColor:'#CCC8C8',   
   },
   messageBar:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    
    height:40
   },


searchBar:{
     flexDirection:'row',
     alignItems:'center',
     borderRadius:20,
     
     width:350,
     elevation:2,
     backgroundColor:'white',
     justifyContent:'space-between',
    },   
    text:{
        marginLeft:13,
        color:'black',
        fontSize:18,
        fontWeight:'300'
    },
    sentMessage:{
       
        backgroundColor:'#00bfff',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        color:'white',
        paddingHorizontal:5,
        paddingVertical:5,
        marginRight:10,
        marginTop:5,
        fontSize:16,
        fontWeight:'200'
        
        
        

    },
})