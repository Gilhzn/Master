import React, { Component } from "react";
import RegUsr from "../services/register_user";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

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
          `https://graph.facebook.com/me?access_token=${token}&fields=id,email,name,picture.type(large)`
        );
        // TODO: Save user facebook token
        const fbUserInfo = await response.json();
        this.setState({ isRendered: true, fbUserInfo });
        RegUsr.RegisterFbUser(fbUserInfo);

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
          <TouchableOpacity onPress={() => this.logIn()}>
            <Text style={styles.fbTxt}>Login with Facebook</Text>
          </TouchableOpacity>
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
    padding: 18,
    borderRadius: 7,
    margin: 40,
    elevation: 4,
    shadowOffset: { width: 3, height: 4 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 7
  },
  fbTxt: {
    textAlign: "center",
    color: "#fff"
  }
});
