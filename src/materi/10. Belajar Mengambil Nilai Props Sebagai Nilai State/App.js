import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component{
	render() {
		return(
			<div>
				<h1>Belajar State & Props</h1>
				<Header gretting="Mina-san Konbanwa"/>
			</div>
		);
	}
}

export default App;
