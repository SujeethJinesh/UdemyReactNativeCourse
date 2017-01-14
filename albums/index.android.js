//Create component and render to device

import React from 'react';
import { AppRegistry } from 'react-native';

//import the specific component you want from the src folder

import Header from './src/components/header';

//Creating component here
const App = () => (
		<Header/>
);

//Rendering component
AppRegistry.registerComponent('albums', () => App);