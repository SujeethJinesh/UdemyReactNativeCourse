//Import lib for making a component

import React from 'react';
import { Text, View } from 'react-native';

//Make a component

const Header = () => {

	const { textStyle, viewStyle } = styles; //use destructuring


	//adding a prop to the text style to ensure changes
	return (

		<View style={viewStyle}>
			<Text style={textStyle}>Albums!</Text>
		</View>

	);
};

//Now we make styling objects
const styles = {
	viewStyle: {
		backgroundColor: "#F8F8F8" //most jsx props are the same as css, check documentation
	},
	textStyle: {
		fontSize: 20
	}
};

//Make the component available to other parts of the app

export default Header;