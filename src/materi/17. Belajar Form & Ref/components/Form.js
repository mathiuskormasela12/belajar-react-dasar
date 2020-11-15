import React, { Component } from 'react';

class Form extends Component {
	constructor() {
		super();

		this.state = {
			nama: ''
		};

		this.textField = React.createRef();

		this.handleNama = this.handleNama.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
	}

	handleNama(e) {
		this.setState({
			nama: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		alert(`Nama anda ${this.state.nama}`);
	}

	handleFocus(e) {
		e.preventDefault();
		this.textField.current.focus();
	}
	
	render() {
		return(
			<div>
				<h4>Belajar Form Dasar</h4>
				<form onSubmit={ this.handleSubmit }>
					<input type="text" value={ this.state.nama } onChange={ this.handleNama } />
					<button type="submit">Kirim</button>
				</form>

				<h4>Belajar Ref</h4>
				<form onSubmit={ this.handleFocus}>
					<input type="text" value={ this.state.nama } onChange={ this.handleNama } ref={ this.textField }/>
					<button type="submit">Focus</button>
				</form>
			</div>
		);
	}
}

export default Form;
