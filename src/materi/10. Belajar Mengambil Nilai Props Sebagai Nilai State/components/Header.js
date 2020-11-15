import React, { Component } from 'react';

class Header extends Component {
	/*
	 Kita mempassing props di dalam constructor sebagai parameter
	 dan mempassing parameter ke constructor parent class
	 berguna untuk ketika kita ingin mengambil nilai
	 dari props menjadi nilai dari sebuah state
	*/
	constructor(props) {
		super(props);

		this.state = {
			nama: 'Mathius',
			/*
			 React tolong masukan nilai dari props
			 gretting kedalam state gretting.

				ket :
				nama props dan state bebas
				boleh sama dengan state ataupun berbeda
			*/
			gretting: this.props.gretting
		};
	}

	render() {
		return(
			<div>
				<header>
					<h3>{ this.state.gretting }</h3>
					<p>Hello { this.state.nama }</p>
				</header>
			</div>
		);
	}
}

export default Header;
