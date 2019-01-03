import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home!"
  };
  state = {};
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
