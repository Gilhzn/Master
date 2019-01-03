import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class SettingsScreen extends Component {
  static navigationOptions = {
    title: "SettingsScreen!"
  };
  state = {};
  render() {
    return (
      <View>
        <Text>SettingsScreen</Text>
      </View>
    );
  }
}

export default SettingsScreen;
