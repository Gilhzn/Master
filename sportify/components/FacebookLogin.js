import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

export default class FacebookLogin extends Component {
  state = {
    isRendered: false
  };

  renderUserFbInfo = () => {
    return (
      <View>
        <Image
          source={{ uri: this.state.fbUserInfo.picture.data.url }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text>ID: {this.state.fbUserInfo.id}</Text>
        <Text>Name: {this.state.fbUserInfo.name}</Text>
      </View>
    );
  };

  async logIn() {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Expo.Facebook.logInWithReadPermissionsAsync("283340192368386", {
        permissions: ["public_profile", "email"]
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`
        );
        // TODO: Save user facebook token
        const fbUserInfo = await response.json();
        this.setState({ isRendered: true, fbUserInfo });
        if (this.props.onLogin != undefined)
          this.props.onLogin("DashboardScreen");
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <View style={styles.flexCenter}>
        <View style={styles.fbBtn}>
          <Text style={styles.fbIcon}>f</Text>
          <Button
            title="Login with Facebook"
            color="#fff"
            onPress={() => this.logIn()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  fbIcon: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    top: 12,
    left: 22,
    position: "absolute"
  },
  fbBtn: {
    backgroundColor: "#3b5998",
    padding: 8,
    paddingLeft: 26,
    textAlign: "center",
    borderRadius: 7,
    margin: 40
  }
});
