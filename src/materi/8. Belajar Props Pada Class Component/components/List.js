import React, { Component } from 'react';
import Image from './Image';

class List extends Component {
	render() {
		return(
			<ol>
				<Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" lebar="200" />
				<li>Nasi Padang</li>
				<Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" lebar="250" />
				<li>Sate</li>
				<Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" lebar="400" />
				<li>Soto Lamongan</li>
				<Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" lebar="500" />
				<li>Nasi Goreng</li>
			</ol>
		);
	}
}

export default List;
