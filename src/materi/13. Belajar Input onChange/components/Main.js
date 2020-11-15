import React, { Component } from 'react';

class Main extends Component {

	constructor(props) {
		super(props);

		this.changeNama = this.changeNama.bind(this);

		this.state = {
			nama: this.props.nama
		};
	}

	changeNama(e) {
		this.setState({
			nama: e.target.value
		});
	}

	render() {
		return(
			<div>
				<p>Nama mu adalah { this.state.nama }</p>
				<input type="text" placeholder="Isi Nama Mu" value={ this.state.nama }  onChange={ this.changeNama }/>

			</div>
		);
	}
}

export default Main;
