import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,TouchableOpacity,ScrollView,Button,TouchableNativeFeedback} from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import ChattingScreen from './ChattingScreen.js';
import DetailsScreen from './DetailsScreen.js';


export default class Settings extends Component{

    constructor(){
        super();
        this.state={
            isModalVisible:false,
            chattingModal:0,
            detailsModal:0
        }
    }
    
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };

    render(){
        return(
<View style={{flex:1,backgroundColor:'white',borderBottomColor:'black',borderBottomWidth:1}}>
    <View style={Design.topBar}>
        <View style={Design.chats}>
            <Text style={{fontSize:26,color:'black',fontWeight:'bold'}}>Conversations</Text>
            <TouchableOpacity onPress={this.toggleModal}>
            <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>Matches</Text>
            </TouchableOpacity>
        </View>
        <View style={Design.searchBar}>
            <Icon1 name='ios-search' size={20} style={{marginLeft:'2%'}}/>
            <TextInput placeholder='Search' />
            

        </View>
    </View>

    <View style={Design.messages}>


    <TouchableNativeFeedback onPress={()=>{this.setState({chattingModal:1})}}>
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
     </TouchableNativeFeedback> 


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



    </View>
    
    
    
    
    
    
    
    
    
    
    
    
    <Modal isVisible={this.state.isModalVisible}
            style={{margin:0}}
            animationIn='slideInRight'
            animationOut='slideOutRight'
            backdropColor='grey'
            backdropOpacity={0.8}>
             <View style={{flex:1}}>
              
              <View style={{ position:'absolute',top:0,left:0,width:'100%',height:'50%'}}>
              <View style={{backgroundColor:'white', height:'100%'}}>
                  <ScrollView>
                      
                  <View style={Design.bar}>
         <View style={Design.photo}>
             <Image source={require('./burrito.png')} style={Design.image}/>
         </View>
         <View style={Design.spacing}>
           <View style={Design.textView}>
              <View style={Design.nameAndDistance}>
                  <Text style={Design.name}>Sisir reddy,18</Text>
                  <Text style={Design.distance}>(5km away)</Text>
              </View>
              <View style={Design.textMessage}>
                  <Text style={Design.text}>Matched 35 min ago</Text>
              </View>
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
                  <Text style={Design.name}>Sisir reddy,18</Text>
                  <Text style={Design.distance}>(5km away)</Text>
              </View>
              <View style={Design.textMessage}>
                  <Text style={Design.text}>Matched 50 min ago</Text>
              </View>
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
                  <Text style={Design.name}>Sisir reddy,18</Text>
                  <Text style={Design.distance}>(5km away)</Text>
              </View>
              <View style={Design.textMessage}>
                  <Text style={Design.text}>Matched 1h ago</Text>
              </View>
           </View>

         
         </View>

     </View>
               
                </ScrollView>
                <Button title="Done" onPress={this.toggleModal} color='#86242A' />
                </View>
              </View>

              </View>
            </Modal>



            <Modal isVisible={this.state.chattingModal}
     backdropColor='#E0DCDC'
     backdropOpacity={1}
     animationIn='slideInRight'
     animationOut='slideInRight'
     style={{margin:0}}>

<View style={Design.header1}>
                    <View style={[Design.viewForFlex,{height:40,marginTop:30}]}>
                        <TouchableNativeFeedback onPress={()=>{this.setState({chattingModal:0})}}>
                        <View style={Design.arrowAlign}>
                        <Icon1 name='ios-arrow-back' size={25} color='grey'/>
                        </View>
                        </TouchableNativeFeedback>
                        <View style={Design.headerTitle1}>
                            <View style={Design.viewForFlex1}>
                            <Image source={require('./reddy.png')} style={Design.chatImage}/>
                            <Text style={Design.title1}>Arjun Reddy</Text>
                            </View>
                        </View>
                        <TouchableNativeFeedback onPress={()=>{this.setState({detailsModal:1})}}>
                        <View style={Design.viewToAlignTitle}>
                        <Icon1 name='ios-information-circle-outline' size={25} color='grey'/>
                        </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>

         <ChattingScreen/>
     

     </Modal>

       <Modal isVisible={this.state.detailsModal}
     backdropColor='#E0DCDC'
     backdropOpacity={1}
     animationIn='slideInRight'
     animationOut='slideInRight'
     style={{margin:0}}>

                <View style={Design.header1}>
                    <View style={[Design.viewForFlex,{height:40,marginTop:30}]}>
                        <TouchableNativeFeedback onPress={()=>{this.setState({detailsModal:0})}}>
                        <View style={Design.arrowAlign}>
                        <Icon1 name='ios-arrow-back' size={25} color='grey'/>
                        </View>
                        </TouchableNativeFeedback>
                        <View style={Design.headerTitle1}>
                            <View style={Design.viewForFlex1}>
                            <Text style={Design.title1}>Details</Text>
                            </View>
                        </View>
                        <View style={{width:'10%'}}>
                            
                        </View>
                        
                    </View>
                </View>

                <DetailsScreen/>






     </Modal>






</View>


        );    
    }
}


const Design=StyleSheet.create({
    topBar:{
        height:100,
        backgroundColor:'white',
        borderBottomColor:'black',
        borderBottomWidth:1,
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
       backgroundColor:'#D6D6D6',
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
        borderBottomColor:'grey'
       
        

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






    header1:{
        margin:0,
        
        height:80,
        elevation:10,
        borderBottomWidth:1,
        borderBottomColor:'#CCC8C8',
        backgroundColor:'#CCC8C8'
    },
    viewForFlex:{
       flexDirection:'row'
        
    },
    viewForFlex1:{
        flexDirection:'row',
        alignItems:'center',
        width:'50%',
        justifyContent:'space-around'
        
    },

    headerTitle1:{
        width:'80%',
        alignItems:'center',
        justifyContent:'center'

    },
    title1:{
        fontSize:18,
        color:'black'
    },
    arrowAlign:{
width:'10%',
flexDirection:'row',
alignItems:'center',
justifyContent:'flex-start',
marginLeft:'1%'


    },
    viewToAlignTitle:{
        width:'10%',
        alignItems:'center',
        justifyContent:'center'
    },
    chatImage:{
        height:40,
        width:40,
        borderRadius:120
    },


})