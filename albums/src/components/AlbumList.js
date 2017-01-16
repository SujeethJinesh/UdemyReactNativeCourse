import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

	state = { albums: [] };

	componentWillMount() { //This method will automatically be rendered as soon as class is ready
		//console.log("Component will mount in AlbumList");
		//debugger; //can be used to help debug

		//this is an async task, and because of that we need to know when we get the data
		//this is called a promise, so we have to define what happens after that info comes with .then.
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ albums: response.data })); //must update state with setState
	}

	//in this example we are passing in a property (album) to be used in our component
	renderAlbums() {
		return this.state.albums.map(album => 
		<AlbumDetail key={album.title} album={album}/>); //creates an array
	}

	render() {

		console.log(this.state);

		return (
		<View>
			{this.renderAlbums()}
		</View>
	);
	}

}

export default AlbumList;
