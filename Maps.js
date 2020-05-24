import React from "react";
import { View,Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

/*
The component is child component for location search 
the selected location can be stored in state variable
*/
export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state={location:''}
  }
  render() {
    return (
      <View style={{ paddingTop: 20, flex: 1 }}>
       <GooglePlacesAutocomplete
  placeholder='Enter Location'
  minLength={2}
  autoFocus={false}
  returnKeyType={'default'}
  fetchDetails={true}
  query={{
    // available options: https://developers.google.com/places/web-service/autocomplete
    key: 'AIzaSyC5FPobF-3D39-_EuXSxyyytTEsXwDVHBA',
    language: 'en', // language of the results
    types: '(cities)' // default: 'geocode'
  }}
  onPress={(data,details=null)=>{this.setState({location:data.description})}}
  
  styles={{
    textInputContainer: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderTopWidth: 0,
      borderBottomWidth:0
    },
    textInput: {
      marginLeft: 0,
      marginRight: 0,
      height: 38,
      color: '#5d5d5d',
      fontSize: 16
    },
    predefinedPlacesDescription: {
      color: '#1faadb'
    },
  }}
  currentLocation={true}

/>
        <Text style={{color:'black'}}>{this.state.location}</Text>
      </View>
    );
  }
}