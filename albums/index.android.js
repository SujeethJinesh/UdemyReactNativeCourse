//Create component and render to device

import React from 'react';
import {AppRegistry, Text } from 'react-native';

//Creating component here
const App = () => (
		<Text>Some Text</Text>
);

//Rendering component
AppRegistry.registerComponent('albums', () => App);