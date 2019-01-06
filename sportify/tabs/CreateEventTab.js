import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

class CreateEventTab extends Component {
  static navigationOptions = {
    tabBarLabel: "Create",
    tabBarIcon: ({ tintColor }) => (
      <Icon
        color={tintColor}
        name="ios-add-circle"
        size={28}
        style={{ paddingTop: 2 }}
      />
    )
  };
  state = {};
  render() {
    return (
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 34,
            margin: 5,
            textDecorationLine: "underline",
            textDecorationColor: "blue"
          }}
        >
          Create Event
        </Text>
        <View>
          <Text>Group name:</Text>
          <TextInput
            placeholder="Enter group name"
            style={{
              height: 40,
              borderColor: "gray",
              borderBottomWidth: 1
            }}
          />
        </View>
      </View>
    );
  }
}

export default CreateEventTab;

const style = StyleSheet.create({
  ctr: {}
});
