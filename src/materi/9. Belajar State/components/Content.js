import React, { Component } from 'react' ;

class Content extends Component {
	// Membuat State
	constructor(props) {
		super(props);
		this.state = {
			deskripsi: `State merupakan sebuah variable 
									yang memiliki nilai yang dinamis 
									dan ketika nilainya diubah maka 
									halaman akan menampilkan hasil 
									perubahaannya tanpa melakukan 
									reload halaman.`
		}
	}
	render() {
		return(
			<div>
				<p>{ this.state.deskripsi }</p>
			</div>
		);
	}
}

export default Content;
