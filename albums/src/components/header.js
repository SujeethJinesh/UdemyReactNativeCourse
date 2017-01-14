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
		backgroundColor: "#F8F8F8", //most jsx props are the same as css, check documentation
		justifyContent: "center", //justify content moves it up and down
		alignItems: "center", //this moves content in the view left or right
		height: 60,
		paddingTop: 15,
		shadowColor: "#000",
		shadowOffset: {width: 0, height: 2}, //these properties are used for shadow styling
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

//Make the component available to other parts of the app

export default Header;