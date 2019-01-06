import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

class NotificationsTab extends Component {
  static navigationOptions = {
    tabBarLabel: "Notifications",
    tabBarIcon: ({ tintColor }) => (
      <Icon
        color={tintColor}
        name="ios-notifications"
        size={28}
        style={{ paddingTop: 2 }}
      />
    )
  };
  state = {};
  render() {
    return (
      <View>
        <Text>NotificationsTab</Text>
      </View>
    );
  }
}

export default NotificationsTab;
