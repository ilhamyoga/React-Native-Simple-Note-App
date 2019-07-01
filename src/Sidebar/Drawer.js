
import React, { Component } from 'react';
import { View, Text } from "react-native";
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import Home from './src/Screens/Home';
import Note from './src/Screens/Note';
import SideBar from './src/Sidebar/Sidebar';

const AppDrawerNavigator = createDrawerNavigator({
    Home: { screen: Home },
    Note: { screen: Note }, 
  },
  {
    contentComponent: props => <SideBar {...props} />
  },
  {
    defaultNavigationOptions: {
      title:'Note'
    }
  }
);

const appContainer = createAppContainer(AppDrawerNavigator);
export default appContainer;