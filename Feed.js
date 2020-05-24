import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image} from 'react-native';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
export default class Settings extends Component{
    constructor(){
        super();
        this.state={
            isModalVisible:false
        }
    }
    
    
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };
     
      render() {
        return (
          <View style={{ flex: 1,backgroundColor:'black' }}>


<View style={Design.bar}>
         <View style={Design.photo}>
             <Image source={require('./burrito.png')} style={Design.image}/>
         </View>
         <View style={Design.spacing}>
           <View style={Design.textView}>
              <View style={Design.nameAndDistance}>
                  <Text style={Design.name}>Sisir reddy</Text>
                  <Text style={Design.distance}>(5km away)</Text>
              </View>
              <View style={Design.textMessage}>
                  <Text style={Design.text}>Namaste chichaa!</Text>
              </View>
           </View>

           <View style={Design.time}>
               <Text style={Design.timeText}>35 min</Text>

           </View>
         </View>

     </View>
    



            <Button title="Show modal" onPress={this.toggleModal} />
            <Modal isVisible={this.state.isModalVisible}
            style={{margin:0}}
            animationIn='slideInRight'
            animationOut='slideOutRight'
            
            
           
            backdropColor='grey'
           
            backdropOpacity={0.8}>
             <View style={{flex:1}}>
                 <View style={{height:'100%',backgroundColor:'black',opacity:0.1}}></View>
              <View style={{ backgroundColor:'green',position:'absolute',top:0,left:0,width:'100%',height:'50%'}}>
              <View style={{backgroundColor:'red', height:'100%'}}>
                  <ScrollView>
                      
                  <View style={Design.bar}>
         <View style={Design.photo}>
             <Image source={require('./burrito.png')} style={Design.image}/>
         </View>
         <View style={Design.spacing}>
           <View style={Design.textView}>
              <View style={Design.nameAndDistance}>
                  <Text style={Design.name}>Sisir reddy</Text>
                  <Text style={Design.distance}>(5km away)</Text>
              </View>
              <View style={Design.textMessage}>
                  <Text style={Design.text}>Namaste chichaa!</Text>
              </View>
           </View>

           <View style={Design.time}>
               <Text style={Design.timeText}>35 min</Text>

           </View>
         </View>

     </View>
     
     <View style={Design.bar}>
         <View style={Design.photo}>
             <Image source={require('./burrito.png')} style={Design.image}/>
         </View>
         <View style={Design.spacing}>
           <View style={Design.textView}>
              <View style={Design.nameAndDistance}>
                  <Text style={Design.name}>Sisir reddy</Text>
                  <Text style={Design.distance}>(5km away)</Text>
              </View>
              <View style={Design.textMessage}>
                  <Text style={Design.text}>Namaste chichaa!</Text>
              </View>
           </View>

           <View style={Design.time}>
               <Text style={Design.timeText}>35 min</Text>

           </View>
         </View>

     </View>

     <View style={Design.bar}>
         <View style={Design.photo}>
             <Image source={require('./burrito.png')} style={Design.image}/>
         </View>
         <View style={Design.spacing}>
           <View style={Design.textView}>
              <View style={Design.nameAndDistance}>
                  <Text style={Design.name}>Sisir reddy</Text>
                  <Text style={Design.distance}>(5km away)</Text>
              </View>
              <View style={Design.textMessage}>
                  <Text style={Design.text}>Namaste chichaa!</Text>
              </View>
           </View>

           <View style={Design.time}>
               <Text style={Design.timeText}>35 min</Text>

           </View>
         </View>

     </View>
               
                </ScrollView>
                <Button title="Hide modal" onPress={this.toggleModal} />
                </View>
              </View>
              
              </View>
            </Modal>
          </View>
        );
      }
    }






    const Design=StyleSheet.create({
        topBar:{
            height:100,
            backgroundColor:'#CBCBCB',
            
            elevation:2
            
        },
        chats:{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginLeft:15,
            marginRight:15
        },
        searchBar:{
            alignItems:'center',
            height:40,
            borderRadius:10,
            flexDirection:'row',
           backgroundColor:'grey',
            marginTop:10,
            marginLeft:15,
            marginRight:15
            
            
        },
        messages:{
            margin:10
        },
        bar:{
           
            height:80,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            borderBottomWidth:1,
           
            
    
        },
        photo:{
            flexDirection:'row',
            flex:3
        },
        image:{
            width:65,
            height:65,
            borderRadius:80,
            borderWidth:1,
            borderColor:'black',
            
    
        },
        spacing:{
            flexDirection:'row',alignItems:'baseline',
            justifyContent:'space-between',
            flex:9
            
        },
        textView:{
            flexDirection:'column',
            justifyContent:'space-between',
            width:'60%',
            height:80,
            
        },
        time:{
            width:'25%',
            height:20,
            alignItems:'center',
            justifyContent:'center',
            
            
        },
        timeText:{
            fontSize:16
        },
        text:{
            fontSize:18,
            color:'#ABA2A2'
        },
        textMessage:{
            marginBottom:'3%'
        },
        nameAndDistance:{
            marginTop:'3%'
        },
        name:{
            fontSize:20,
            color:'black',
            fontWeight:'bold'
        },
        distance:{
            fontSize:16,
            color:'black'
        },
    
    })