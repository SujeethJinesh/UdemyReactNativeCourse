//Import lib for making a component

import React from 'react';
import { Text } from 'react-native';

//Make a component

const Header = () => {

	const { textStyle } = styles;


	//adding a prop to the text style to ensure changes
	return <Text style={textStyle}>Albums!</Text>;
};

//Now we make styling objects

const styles = {
	textStyle: {
		fontSize: 20
	}
};

//Make the component available to other parts of the app

export default Header;