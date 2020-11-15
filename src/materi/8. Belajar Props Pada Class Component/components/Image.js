import React, { Component } from 'react';

class Image extends Component {
	render(){
		return(
			<img 
				src={this.props.linkGambar}
				width={this.props.lebar}
				alt="gambar-makanan"
			/>
		);
	}
}

export default Image;
