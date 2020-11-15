import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
	render() {
		return(
			<div>
				<h1>Belajar Handling Event</h1>
				<Header message="Hello React Js"/>
				<Main message="Halo React"/>
			</div>
		);
	}
}

export default App;
