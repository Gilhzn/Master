import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

class SearchEventTab extends Component {
  static navigationOptions = {
    tabBarLabel: "Search",
    tabBarIcon: ({ tintColor }) => (
      <Icon
        color={tintColor}
        name="md-search"
        size={28}
        style={{ paddingTop: 2 }}
      />
    )
  };
  state = {};
  render() {
    return (
      <View>
        <Text>SearchEventTab</Text>
      </View>
    );
  }
}

export default SearchEventTab;
