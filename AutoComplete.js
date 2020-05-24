import React,{Component} from "react";
import { View,Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

/*
The component is child component for location search 
the selected location can be stored in state variable
*/
export default class AutoComplete extends Component {
  constructor() {
    super();
    this.state={location:''}
  }
  render() {
    return (
      <View style={{flex: 1 }}>
       <GooglePlacesAutocomplete
  placeholder='Enter Location'
  minLength={2}
  query={{
    // available options: https://developers.google.com/places/web-service/autocomplete
    key: 'AIzaSyC5FPobF-3D39-_EuXSxyyytTEsXwDVHBA',
    language: 'en', // language of the results
    types: '(cities)' // default: 'geocode'
  }}
  onSelect 
  styles={{
    textInputContainer: {
      backgroundColor: 'grey',
    
    },
    textInput: {
      
      
      color: '#5d5d5d',
 
    },
    predefinedPlacesDescription: {
      color: '#1faadb'
    },
  }}
  currentLocation={true}

/>
        
      </View>
    );
  }
}