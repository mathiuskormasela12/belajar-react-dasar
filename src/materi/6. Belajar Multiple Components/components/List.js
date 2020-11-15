import React, { Component } from 'react';
import Image from './Image';

class List extends Component {
	render() {
		return(
			<ol>
				<Image />
				<li>Nasi Padang</li>
				<li>Soto Lamongan</li>
				<li>Nasi Goreng</li>
			</ol>
		);
	}
}

export default List;
