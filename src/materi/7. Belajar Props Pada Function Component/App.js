import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
	render() {
		return(
			<div>
				<Header nama="Mathius" usia="18" frontend="React Js" backend="Node Js"/>
			</div>
		);
	}
}

export default App;
