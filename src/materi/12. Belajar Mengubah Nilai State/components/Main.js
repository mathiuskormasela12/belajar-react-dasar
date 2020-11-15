import React, { Component } from 'react';

class Main extends Component {

	constructor(props) {
		super(props);

		// membuat state
		this.state = {
			title: 'Menu Makanan',
			subtitle: 'Soto Ayam'
		}

		// binding untuk passing this kedalam sebuah method
		this.changeState = this.changeState.bind(this);
		this.changeState2 = this.changeState2.bind(this);
		this.swapState = this.swapState.bind(this);
		this.changeWithProps = this.changeWithProps.bind(this);
	}

	// Mengubah nilai state cara pertama (tidak disarankan)
	changeState() {
		this.setState({
			title: 'Menu Minuman',
			subtitle: 'Juice'
		});
	}

	// Mengubah nilai state cara kedua (lebih disarankan)
	changeState2() {
		this.setState((state, props) => {
			return {
				title: 'Menu Makanan',
				subtitle: 'Soto Ayam'
			}
		});
	}

	// Menukar nilai sebuah state
	swapState() {
		this.setState((state, props) => {
			return {
				title: state.subtitle,
				subtitle: state.title
			}
		});
	}

	// Mengubah nilai state dengan nilai props
	changeWithProps() {
		this.setState((state, props) => {
			return {
				title: props.data1,
				subtitle: props.data2
			}
		});
	}

	render() {
		return(
			<div>
				<h3>{ this.state.title }</h3>
				<h5>{ this.state.subtitle }</h5>
				<button onClick={this.changeState}>Ubah State Cara Pertama</button>
				<button onClick={this.changeState2}>Ubah State Cara Kedua</button>
				<button onClick={this.swapState}>Tukar State</button>
				<button onClick={this.changeWithProps}>Ubah Dengan Props</button>
			</div>
		);
	}
}

export default Main;
