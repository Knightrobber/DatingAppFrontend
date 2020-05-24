import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,ScrollView,TouchableOpacity,TouchableNativeFeedback,TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import AutoComplete from './AutoComplete.js';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
var i=0;
var array=[];

export default class Location extends Component{
    
    constructor(){
        super();
        this.state={
            addLocationModal:0,
            selectedLocation:'',
            place:[],
            color:[],
            tempPlace:''
            
            
        }
    }
    componentWillMount(){
        this.defaultColorFunction();
    }
    defaultColorFunction=()=>{
        let k=this.state.color;
        k[0]='red';
        for(var p=1;p<=10;++p)
        k[p]='white';
        this.setState({color:k})

    }
     isvisible(k){
         if(this.state.place[k]==null)
         return 0;
         else
         return 1;
     }
    assignPlace=(placeV)=>{
        var q=0;
        let k=this.state.place;
        if(placeV!='')
        {   for(var p=0;p<=10;++p)
            {if(placeV==this.state.place[p])
                {++q};
            }
            if(q==0){
            k[++i]=placeV;
        this.setState({place:k});
            }
    }

    }
    changeColor=(no)=>{
        let k=this.state.color;
        k[no]='red';
        for(var p=0;p<=10;++p)
        {
            if(p!=no)
            k[p]='white';
        }
        this.setState({color:k})

        
    }
    render(){
        
        return(
            <View style={Design.container}>
               
      <ScrollView>
            <TouchableNativeFeedback onPress={()=>{this.changeColor(0);this.setState({addLocationModal:1})}}>
                <View style={[Design.field]}>
                 
                   <View style={Design.iconAndText}>
                       <View style={Design.icon}>
                        <Icon name='location-pin' size ={25} color='white'/>
                       </View>
                      <View style={Design.text}>
                        <Text style={{fontSize:18,color:'black',fontWeight:'300'}}>My current location</Text>
                        <Text>Hyderabad, Inida</Text>

                      </View>
                    </View>

                    <View style={Design.tickMark}>
                        <Icon1 name='done' size={25} color={this.state.color[0]}/>
                    </View>
                    
                </View>
            </TouchableNativeFeedback >


             <TouchableNativeFeedback onPress={()=>this.changeColor(1)}>
                <View style={[Design.field1,{opacity:this.isvisible(1)}]}>

                   <View style={Design.flagAndText}>
                       <View style={Design.flag}>
                           <Image source={require('./india.png')} style={Design.flagImage}/>
                       </View>
                       <View style={Design.state}>
                           <Text style={Design.stateText}>{this.state.place[1]}</Text>
                       </View>
                   </View>

                    <View style={Design.tickMark}>
                        <Icon1 name='done' size={25} color={this.state.color[1]}/>
                    </View>
                    
                </View>
             </TouchableNativeFeedback>   

             <TouchableNativeFeedback onPress={()=>this.changeColor(2)}>
                <View style={[Design.field1,{opacity:this.isvisible(2)}]}>

                   <View style={Design.flagAndText}>
                       <View style={Design.flag}>
                           <Image source={require('./india.png')} style={Design.flagImage}/>
                       </View>
                       <View style={Design.state}>
                           <Text style={Design.stateText}>{this.state.place[2]}</Text>
                       </View>
                   </View>

                    <View style={Design.tickMark}>
                        <Icon1 name='done' size={25} color={this.state.color[2]}/>
                    </View>
                    
                </View>
             </TouchableNativeFeedback>  
                

             <TouchableNativeFeedback onPress={()=>this.changeColor(3)}>
                <View style={[Design.field1,{opacity:this.isvisible(3)}]}>

                   <View style={Design.flagAndText}>
                       <View style={Design.flag}>
                           <Image source={require('./india.png')} style={Design.flagImage}/>
                       </View>
                       <View style={Design.state}>
                           <Text style={Design.stateText}>{this.state.place[3]}</Text>
                       </View>
                   </View>

                    <View style={Design.tickMark}>
                        <Icon1 name='done' size={25} color={this.state.color[3]}/>
                    </View>
                    
                </View>
             </TouchableNativeFeedback>  

             <TouchableNativeFeedback onPress={()=>this.changeColor(4)}>
                <View style={[Design.field1,{opacity:this.isvisible(4)}]}>

                   <View style={Design.flagAndText}>
                       <View style={Design.flag}>
                           <Image source={require('./india.png')} style={Design.flagImage}/>
                       </View>
                       <View style={Design.state}>
                           <Text style={Design.stateText}>{this.state.place[4]}</Text>
                       </View>
                   </View>

                    <View style={Design.tickMark}>
                        <Icon1 name='done' size={25} color={this.state.color[4]}/>
                    </View>
                    
                </View>
             </TouchableNativeFeedback>  

             <TouchableNativeFeedback onPress={()=>this.changeColor(5)}>
                <View style={[Design.field1,{opacity:this.isvisible(5)}]}>

                   <View style={Design.flagAndText}>
                       <View style={Design.flag}>
                           <Image source={require('./india.png')} style={Design.flagImage}/>
                       </View>
                       <View style={Design.state}>
                           <Text style={Design.stateText}>{this.state.place[5]}</Text>
                       </View>
                   </View>

                    <View style={Design.tickMark}>
                        <Icon1 name='done' size={25} color={this.state.color[5]}/>
                    </View>
                    
                </View>
             </TouchableNativeFeedback>  

             <TouchableNativeFeedback onPress={()=>this.changeColor(6)}>
                <View style={[Design.field1,{opacity:this.isvisible(6)}]}>

                   <View style={Design.flagAndText}>
                       <View style={Design.flag}>
                           <Image source={require('./india.png')} style={Design.flagImage}/>
                       </View>
                       <View style={Design.state}>
                           <Text style={Design.stateText}>{this.state.place[6]}</Text>
                       </View>
                   </View>

                    <View style={Design.tickMark}>
                        <Icon1 name='done' size={25} color={this.state.color[6]}/>
                    </View>
                    
                </View>
             </TouchableNativeFeedback>  





                
                
                 

                <Modal style={{margin:0,zIndex:100}}
                backdropOpacity={1}
                backdropColor='#F5F5F5'
                animationIn='slideInRight'
                animationOut='slideOutRight'
                isVisible={this.state.addLocationModal}
                >
                    
                      <View style={{flex: 1 }}>
                           <TextInput placeholder='enter location' onChangeText={(input)=>this.setState({tempPlace:input})} 
                           onSubmitEditing={()=>{this.setState({addLocationModal:0});this.assignPlace(this.state.tempPlace)}}/>

                   
                    
                    </View>



                </Modal>
            </ScrollView>

            <View style={Design.addLocations}>
                    
                    


                </View>
            </View>
        );
    }
}













const Design=StyleSheet.create({
    container:{
        flex:1,
    
   
    },
    header:{
        marginTop:'3%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:'5%'
    },
    viewForFlex:{
        flexDirection:'row'
    },
    headerTitle:{
        width:'95%',
        alignItems:'center',

    },
    title:{
        fontSize:18
    },
    arrowAlign:{
width:'7%',
alignItems:'center',
justifyContent:'center',
    },

    
    field:{
        height:100,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        
       
        
        margin:0

        
    },
    field1:{
        height:100,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderTopWidth:1,
        
        margin:0

        
    },
   
    iconAndText:{
        flexDirection:'row',
        width:'70%',
        justifyContent:'space-around',
        alignContent:'center',
        
        
    },
    icon:{
        width:'10%',
        height:'32%',
        borderRadius:6,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'3%'
 
     },
    text:{
        width:'75%',
       

    },
    tickMark:{
        width:'15%',
        height:'50%',
       
        alignItems:'center',
        justifyContent:'center'
    },
    flagAndText:{
        flexDirection:'row',
        width:'70%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    flag:{
        width:'10%',
        alignItems:'center',
        justifyContent:'center'
    },
    flagImage:{
        width:'100%',
        height:'30%'
    },
    state:{
        width:'75%'
    },
    stateText:{
        fontSize:18,color:'black',fontWeight:'300'
    },
})


