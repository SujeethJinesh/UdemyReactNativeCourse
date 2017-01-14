//Create component and render to device

import React from 'react';
import { AppRegistry, View } from 'react-native';

//import the specific component you want from the src folder
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Creating component here
//note to NOT put semicolons after components
const App = () => (
	<View>
		<Header headerText={"Albums"}/> 
		<AlbumList/>
	</View>
);

//Rendering component
AppRegistry.registerComponent('albums', () => App);