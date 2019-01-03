import React from "react";
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
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
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
  },
  {
    defaultNavigationOptions: {
      title: "Welcome",
      headerStyle: {
        backgroundColor: "orange"
      }
    }
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
