import React from "react";
import { View,Text,TextInput } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Maps from './Maps.js';



export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loc: ""
      };
    }
    /// state value updated from child component map;
    
  handler(arg) {
      this.setState({
        loc: arg
      });
      return;
    }
    render() {
      return (
        <View>
          <View>
            <Text>Name</Text>
            <TextInput />
          </View>
          <View>
            <Text>Address</Text>
            <TextInput />
          </View>
          <View>
            <Text>Description</Text>
            <TextInput />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}> {this.state.loc}</Text>
          </View>
          
  <View>
            <Maps handler={this.handler.bind(this)} />
          </View>
        </View>
      );
    }
  }