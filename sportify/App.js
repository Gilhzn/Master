import React from "react";
import { Image } from "react-native";
import RegUsr from "./services/register_user";
// Screens
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import SettingsScreen from "./screens/SettingsScreen";
// Tabs
import CreateEventTab from "./tabs/CreateEventTab";
import NotificationsTab from "./tabs/NotificationsTab";
import SearchEventTab from "./tabs/SearchEventTab";
// Navigation
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// Tabs navigator
const DashboardTabNavigator = createBottomTabNavigator(
  {
    CreateEventTab,
    SearchEventTab,
    NotificationsTab
  },
  {
    initialRouteName: "CreateEventTab"
  }

  // {
  //   navigationOptions: ({ navigation }) => {
  //     const { routeName } = navigation.state.routes[navigation.state.index];
  //     return {
  //       headerTitle: routeName
  //     };
  //   }
  // }
);

// TopStackNavigtor
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { name, email, picture } = RegUsr.GetFbUser();
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2,
              marginRight: 10,
              marginTop: 10,
              borderWidth: 1,
              borderColor: "blue"
            }}
            source={{ uri: picture }}
          />
        )
      };
    }
  }
);

// Drawer/Humburger navigator
const AppDrawerNavigator = createDrawerNavigator({
  DashboardScreen: {
    screen: DashboardStackNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Dashboard"
      };
    }
  }
});

// Navigation Screens
const AppSwitchNavigator = createSwitchNavigator(
  {
    LoginScreen: LoginScreen,
    DashboardScreen: {
      screen: AppDrawerNavigator
    }
  }
  //Remove this after Dev ends
  // { initialRouteName: "DashboardScreen" }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
