import React, { Component } from 'react';

class Main extends Component {

	constructor() {
		super();

		this.state = {
			nama: '-',
			usia: 0
		};

		this.changeName = this.changeName.bind(this);
	}

	changeName(stateName, e) {
		this.setState({ [stateName]: e.target.value });
	}
	
	/*
	 Method milik react yg berjalan setelah method render 
	 setiap kali kita meload sebuah component.
	*/
	componentDidMount() {
		console.log('jalan');
	}

	render() {
		console.log('render');
		return(
			<div>
				{
					/*<p>Hello React</p>*/
				}
				<p>Halo nama saya { this.state.nama } saya berusia { this.state.usia } tahun</p>
				<br />
				<br />
				<input type="text" placeholder="Nama mu" value={ this.state.nama } onChange={ e => this.changeName('nama', e) } />
				<input type="number" placeholder="Usia mu" value={ this.state.usia } onChange={ e => this.changeName('usia', e) } />
			</div>
		);
	}
}

export default Main;
