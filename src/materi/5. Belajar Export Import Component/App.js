import React, { Component } from 'react';
import { Header } from './components/Header';
import * as Elements from './components/Footer';
import { Main }  from './components/Main';

class App extends Component {
	render() {
		return(
			<div>
				<Header />
				<Main />
				<Elements.Footer />
			</div>
		);
	}
}

export default App;
