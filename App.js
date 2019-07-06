
import React, { Component } from 'react';
import { View, Text } from "react-native";
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import Home from './src/Screens/Home';
import Note from './src/Screens/Note';
import AddNote from './src/Screens/AddNote';
import EditNote from './src/Screens/EditNote';
import SideBar from './src/Sidebar/Sidebar';

import { Provider } from 'react-redux';
import store from './src/publics/redux/store';

const AppDrawerNavigator = createDrawerNavigator({
    Home: { screen: Home },
    AddNote: { screen: AddNote },
    EditNote: { screen: EditNote },
  },
  {
    contentComponent: props => <SideBar {...props} />
  },
);

const AppContainer = createAppContainer(AppDrawerNavigator);
export default class App extends Component{
	render(){
		return(
			<Provider store={store}>
				<AppContainer/>
			</Provider>
		)
	}
}