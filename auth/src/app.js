import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

	//lifecycle method
	componentWillMount() {

		firebase.initializeApp({
    		apiKey: 'AIzaSyAlzqcfFsbyvDkqsLQhZ5UvB7EC4OvQhkE',
    		authDomain: 'authentication-c5b64.firebaseapp.com',
    		databaseURL: 'https://authentication-c5b64.firebaseio.com',
    		storageBucket: 'authentication-c5b64.appspot.com',
    		messagingSenderId: '704788107649'
  		});
	}

	//required function
	render () {
		return (
			<View>
				<Header headerText='Authentication' />
				<LoginForm />
			</View>
		);
	}
}

export default App;
