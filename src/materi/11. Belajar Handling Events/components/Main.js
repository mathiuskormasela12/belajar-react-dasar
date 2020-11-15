import React, { Component } from 'react';

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			message: this.props.message
		}

		// Untuk mengizinkan method event menggunakan props dan state
		this.showAlert = this.showAlert.bind(this);
	}

	// Define Method yang akan digunakan handling event
	showAlert(message, e) {
		e.preventDefault();
		alert('ok');
		alert(message);
	}

	render() {
		return(
			<main>
				<h3>Handling Event Pada Class Component</h3>
				<a href="/" onClick={e => this.showAlert(this.state.message, e)}>Handling Event Class Component</a>
			</main>
		);
	}
}

export default Main;
