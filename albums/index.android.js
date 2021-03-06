//Create component and render to device

import React from 'react';
import { AppRegistry, View } from 'react-native';

//import the specific component you want from the src folder
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Creating component here
//note to NOT put semicolons after components
//In order to make sure content is totally scrollable,
//use the flex: 1 property in the root view tag
const App = () => (
	<View style={{flex: 1}}>
		<Header headerText={"Albums"}/> 
		<AlbumList/>
	</View>
);

//Rendering component
AppRegistry.registerComponent('albums', () => App);