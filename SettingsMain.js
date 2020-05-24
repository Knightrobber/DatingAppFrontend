import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableNativeFeedback,ScrollView,Button,TouchableOpacity}   from 'react-native';
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Slider}  from 'react-native';
import AdvancedFilters from './AdvancedFilters.js';
import NotificationSettings from './NotificationSettings.js';
import Location from './Location.js'

import Icon1 from 'react-native-vector-icons/MaterialIcons'


export default class SettingsMain extends Component{

    constructor(){
        super();
        this.state={
            
            age:18, 
            distance:1,
            text1:'grey',
            text2:'grey',
            text3:'grey',
            text1Icon:'white',
            text2Icon:'white',
            text3Icon:'white',
            notificationSettingsModal:0,
            advancedFiltersModal:0,
            locationModal:0


        }
    }

    changeTheColor =(xs)=>{
     if(xs === 1){
         this.setState({
             text1:'#BE220F',
             text1Icon:'#BE220F',
             text2:'grey',
             text3:'grey',
             text2Icon:'white',
             text3Icon:'white',
            });
            
     }
     else if(xs === 2){
        this.setState({
            text2:'#BE220F',
            text2Icon:'#BE220F',
            text1:'grey',
            text3:'grey',
            text1Icon:'white',
             text3Icon:'white',
           })
    }

    else if(xs === 3){
        this.setState({
            text3:'#BE220F',
            text3Icon:'#BE220F',
            text1:'grey',
            text2:'grey',
            text1Icon:'white',
            text2Icon:'white',
           })
    }
    
    };

    



    render(){
        return(
<View style={Design.container}>
 <View style={Design.viewForMargin}> 
 <ScrollView>




  <View>
    <View style={Design.searchBar}>
       <Text style={Design.text}>Snooze Mode</Text>
    </View>
 
   <View>
       <Text style={Design.textBeneath}>Turning this on will hide you from all bumbles modes and you will be invisible for an i definite amonut of imw</Text>
   </View>
  </View>



<View style={Design.headerAndBar}>
     <View style={Design.header}>
      <Text style={Design.textBeneath}>I'm interested in </Text>
     </View>





    <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple()} onPress={()=> {
        
        this.changeTheColor(1);
        }} >
     <View style={Design.searchBar}>
      <Text style={{ marginLeft:13,
        color:this.state.text1,
        fontSize:16,
        fontWeight:'300'}}>
            Men
            </Text>
      <Icon name='arrow-right' size={20} color={this.state.text1Icon} style={{marginRight:10}} />
     </View>
    </TouchableNativeFeedback>
     
     <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple()}  onPress={()=> {
       
        this.changeTheColor(2);
        }}>
     <View style={Design.searchBar}>
         
      <Text style={{ marginLeft:13,
        color:this.state.text2,
        fontSize:16,
        fontWeight:'300'}}>
            Women
            </Text>
      <Icon name='arrow-right' size={20} color={this.state.text2Icon} style={{marginRight:10}} />
     </View>
    </TouchableNativeFeedback  >

    <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple()}  onPress={()=> {
       
        this.changeTheColor(3);
        }}>
     <View style={Design.searchBar}>
      <Text style={{ marginLeft:13,
        color:this.state.text3,
        fontSize:16,
        fontWeight:'300'}}>
            Everyone
            </Text>
      <Icon name='arrow-right' size={20} color={this.state.text3Icon} style={{marginRight:10}} />
     </View>
    </TouchableNativeFeedback  > 
</View>




   <View style={Design.preferences}>
       
   <View style={Design.header}>
      <Text style={Design.textBeneath}>Age</Text>
     </View>
     <View style={Design.lookupBar}>
         <View style={{marginTop:10}}>
          <Text style={Design.text}>Between 18 and {Math.round(this.state.age)}</Text>
         </View>
         
          <Slider    style={{height:50,width:250}}
                minimumValue={18}
                maximumValue={100}
                onValueChange={(input)=>{this.setState({age:input})}}
                minimumTrackTintColor='red'
                thumbTintColor='#BE220F'
                thumbImage={require('./tinderGo.png')}/>
       
     </View>


     <View style={Design.header}>
      <Text style={Design.textBeneath}>Distance</Text>
     </View>
     <View style={Design.lookupBar}>
         <View style={{marginTop:10}}>
          <Text style={Design.text}>Upto {Math.round(this.state.distance)} kilometers away</Text>
         </View>
         
          <Slider    style={{height:50,width:250}}
                minimumValue={1}
                maximumValue={100}
                onValueChange={(input)=>{this.setState({distance:input})}}
                minimumTrackTintColor='red'
                thumbTintColor='#BE220F'
               
                thumbImage={require('./tinderGo.png')}/>
       
     </View>


     <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple()} onPress={()=> {
        this.setState({notificationSettingsModal:1})
       
        }} >
            
     <View style={Design.searchBarN}>
      <Text style={Design.text}>Notification settings</Text>
      <Icon name='arrow-right' size={20} style={{marginRight:10}} />
     </View>
            
    </TouchableNativeFeedback>
     


       

    <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple()} onPress={()=> {
        this.setState({locationModal:1})
       
        }} >
            
     <View style={Design.searchBarN}>
      <Text style={Design.text}>Location settings</Text>
      <Icon name='arrow-right' size={20} style={{marginRight:10}} />
     </View>
            
    </TouchableNativeFeedback>



     



   
   </View>
</ScrollView>
   </View>
   <Modal isVisible={this.state.notificationSettingsModal}
   margin={0}
   backdropColor='#FAFAFA'
   backdropOpacity={1}
   animationIn='slideInRight'
   animationOut='slideOutRight'
       onBackButtonPress={()=>{this.setState({notificationSettingsModal:0})} }>
       <NotificationSettings/>
       <Button onPress={()=>{this.setState({notificationSettingsModal:0})}} title='hide modal'/>



   </Modal>
   <Modal isVisible={this.state.advancedFiltersModal}
   margin={0}
   backdropColor='#F5F5F5'
   backdropOpacity={1}
   animationIn='slideInRight'
   animationOut='slideOutRight'>

              <View style={Design.header1}>
                    <View style={Design.viewForFlex}>
                        <TouchableNativeFeedback onPress={()=>{this.setState({advancedFiltersModal:0})}}>
                        <View style={Design.arrowAlign2}>
                        <Icon1 name='arrow-back' size={25} color='grey'/>
                        </View>
                        </TouchableNativeFeedback>
                        <View style={Design.headerTitle2}>
                            <Text style={Design.title1}>Advanced Filters</Text>
                        </View>
                        <View style={Design.viewToAlignTitle}>

                        </View>
                    </View>
                </View>

       <AdvancedFilters/>
       






   </Modal>


   <Modal isVisible={this.state.locationModal}
   style={{margin:0,zIndex:10}}
   backdropColor='#F5F5F5'
   backdropOpacity={1}
   animationIn='slideInRight'
   animationOut='slideOutRight'
   onBackButtonPress={()=>{this.setState({locationModal:0})} }>
                 <View style={Design.header1}>
                    <View style={Design.viewForFlex}>
                        <TouchableNativeFeedback onPress={()=>{this.setState({locationModal:0})}}>
                        <View style={Design.arrowAlign}>
                        <Icon1 name='arrow-back' size={25} color='grey'/>
                        </View>
                        </TouchableNativeFeedback>
                        <View style={Design.headerTitle1}>
                            <Text style={Design.title1}>My Locations</Text>
                        </View>
                        <View style={Design.viewToAlignTitle}>

                        </View>
                    </View>
                </View>

       <Location/>
       






   </Modal>


</View>
        );    
    }
}

const Design=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8F8F8'},
        viewForMargin:{
            margin:15
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
        width:'98%',
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
     width:'98%',
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
    },
    header1:{
        marginTop:'3%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:'5%'
    },
    viewForFlex:{
        flexDirection:'row'
    },
    headerTitle1:{
        width:'86%',
        alignItems:'center',

    },
    headerTitle2:{
        width:'93%',
        alignItems:'center',

    },
    title1:{
        fontSize:18
    },
    arrowAlign:{
width:'7%',
alignItems:'center',
justifyContent:'center',


    },
    arrowAlign2:{
        width:'7%',
        alignItems:'center',
        justifyContent:'flex-start',
        
        
            },
    viewToAlignTitle:{
        width:'7%'
    }


})
