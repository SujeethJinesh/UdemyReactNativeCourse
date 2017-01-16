import React from 'react';
import {Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => { //here we are receiving our props object from the call
	//In this case we are sending in the text component as a prop to the card component
	return (
		<Card>
			<CardSection>
				<Text>{props.album.title}</Text>
			</CardSection>
		</Card>
	);
};

export default AlbumDetail;
