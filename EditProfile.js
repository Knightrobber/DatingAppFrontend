import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,ImageBackground,ScrollView,Button,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';



export default class EditProfile extends Component{
    render(){
        return(
            <View style={Design.container}>
                <ScrollView >
            <View style={{margin:15}}>
             
        <View style={Design.photos}>
                <Text style={Design.text}>Photos</Text>
            <View>
                <View style={Design.boxSpacing}>
                 

                  <ImageBackground  source={require('./reddy.png')} style={Design.Images} imageStyle={{borderRadius:10}}>
                      <Image source={require('./pen.png')} style={{height:30,width:30,borderRadius:110,marginLeft:80,marginTop:130,borderColor:'white',elevation:1}}/>
                  </ImageBackground>
                  
                  <View style={Design.box}>
                      <Image source={require('./add.png')} style={Design.add}/>
                   </View>

                   <View style={Design.box}>
                      <Image source={require('./add.png')} style={Design.add}/>
                   </View>

                   
                
                
                </View>

                <View style={Design.boxSpacing1}>


                  
                  <View style={Design.box}>
                      <Image source={require('./add.png')} style={Design.add}/>
                   </View>

                   <View style={Design.box}>
                      <Image source={require('./add.png')} style={Design.add}/>
                   </View>

                   <View style={Design.box}>
                      <Image source={require('./add.png')} style={Design.add}/>
                   </View>

                   
                
                </View>
            </View>   
                 





        </View>
        </View>
                
               <View style={Design.info}>


               <View style={Design.headerField}>
                    
                     <View >
                     <Text style={Design.header}>My Information</Text>
                     
                     </View>
                   

                 </View>


                  <View style={Design.field}>
                     
                      <View style={Design.widthName}>
                      <Text style={Design.nameTextInput}>Name</Text>
                      </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <View style={Design.widthTextInput}>
                      <TextInput placeholder='your name' style={Design.textInput}></TextInput>
                      </View>
                      <View  style={Design.widthIcon}>
                      <Icon name='arrow-right' size={20} color='grey'/>
                      </View>
                    </View> 

                  </View>


                  <View style={Design.field}>
                     
                     <View style={Design.widthName}>
                     <Text style={Design.nameTextInput}>Hometown</Text>
                     </View>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                     <View style={Design.widthTextInput}>
                     <TextInput placeholder='your name 43615234' style={Design.textInput}></TextInput>
                     </View>
                     <View  style={Design.widthIcon}>
                     <Icon name='arrow-right' size={20} color='grey'/>
                     </View>
                   </View> 

                 </View>



                 <View style={Design.field}>
                     
                     <View style={Design.widthName}>
                     <Text style={Design.nameTextInput}>gender</Text>
                     </View>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                     <View style={Design.widthTextInput}>
                     <TextInput placeholder='your name' style={Design.textInput}></TextInput>
                     </View>
                     <View  style={Design.widthIcon}>
                     <Icon name='arrow-right' size={20} color='grey'/>
                     </View>
                   </View> 

                 </View>

               </View>


               <View style={Design.infoAboutMe}>
                   <View style={Design.headerField}>
                       <Text style={Design.header}>About me</Text>
                   </View>
                   <View style={Design.aboutMeField}>
                       <TextInput placeholder='Write something about yourself' style={Design.textInput}/>
                   </View>
               </View>
 
              

               
               <View style={Design.myInterests}>
                   <View style={Design.headerField}>
                       <Text style={Design.header}>My Interests</Text>
                   </View>

                   <View style={Design.field}>
                     
                      <View style={Design.widthNameIcon}>
                      <Icon1 name='dumbbell' size={20} color='white'/>
                      </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <View style={Design.widthTextInputIcon}>
                      <TextInput placeholder='what sports are you into' style={Design.textInput}></TextInput>
                      </View>
                      <View  style={Design.widthIcon}>
                      <Icon name='arrow-right' size={20} color='grey'/>
                      </View>
                    </View> 

                  </View>

                  <View style={Design.field}>
                     
                      <View style={Design.widthNameIcon}>
                      <Icon name='music' size={20} color='white'/>
                      </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <View style={Design.widthTextInputIcon}>
                      <TextInput placeholder='what music do you like' style={Design.textInput}></TextInput>
                      </View>
                      <View  style={Design.widthIcon}>
                      <Icon name='arrow-right' size={20} color='grey'/>
                      </View>
                    </View> 

                  </View>

                  <View style={Design.field}>
                     
                      <View style={Design.widthNameIcon}>
                      <Icon1 name='utensils' size={20} color='white'/>
                      </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                      <View style={Design.widthTextInputIcon}>
                      <TextInput placeholder='what is your favorite food' style={Design.textInput}></TextInput>
                      </View>
                      <View  style={Design.widthIcon}>
                      <Icon name='arrow-right' size={20} color='grey'/>
                      </View>
                    </View> 

                 
                  
                  </View>
                  <View style={{height:'20%'}}>
                  <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ProfileMain')}} opacity={0.9}>
                  <View style={{ height:'100%',backgroundColor:'#86242A',alignItems:'center',justifyContent:'center'}} onPress={()=>{this.props.navigation.navigate('ProfileMain')}}>
                 
                  <Text style={{color:'white',fontSize:20}}> Done </Text>
                  
                  </View>
                  </TouchableOpacity>
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
        backgroundColor:'#E4E4E4'

    },
    photos:{
       

    },
    boxSpacing:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:7
    },
    boxSpacing1:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:15
    },
    Images:{
        width:100,
        height:150,
        elevation:2
    },
    text:{
        
            marginLeft:10,
            color:'black',
            fontSize:18,
            fontWeight:'300'
       
    },
    box:{
        width:100,
        height:150,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'grey',
        elevation:2,
        
    },
    add:{
        width:40,
        height:40,
    },
    header:{
        fontSize:16,
        
    },
    info:{
        height:250,
        backgroundColor:'white'
    },
    infoAboutMe:{
        backgroundColor:'white',
        height:130
    },
    field:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'grey',
        marginLeft:20,
        height:50,
        
    },
    aboutMeField:{
        marginLeft:20
    },
    
    headerField:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#CBCBCB',
       
        backgroundColor:'#E4E4E4',
        height:50
    },
    header:{
        fontSize:16,
        marginLeft:20

    },
    widthName:{
        width:120,
       
        alignItems:'flex-start',
        height:25
        
    },
    widthNameIcon:{
        width:40,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'grey',
        borderRadius:5,
        height:30
        
        
    },
    nameTextInput:{
        fontSize:18,
        color:'black',

    },
    widthTextInput:{
        width:200,
        
        alignItems:'flex-start',
        
    },
    widthTextInputIcon:{
        width:250,
        
        alignItems:'flex-start',
        
    },
    textInput:{
        fontSize:18
    },
    widthIcon:{
        width:40,
        
        alignItems:'flex-end'
    },
    myInterests:{
        height:250,
        backgroundColor:'white'

    },
   
})