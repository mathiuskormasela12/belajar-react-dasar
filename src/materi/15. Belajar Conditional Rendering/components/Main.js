import React, { Component } from 'react';

class Main extends Component {
	constructor() {
		super();

		this.state = {
			show: false
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.setState((state, props) => {
			return {
				show: !state.show
			}
		});
	}

	render() {
		return(
			<div>
				{ (!this.state.show) ? (
					// ketika memiliki banyak element, maka element-element tsb harus di bungkus agar tidak error}
					<div>
						<p>Tampil</p>
					</div>
				): (
					<div>
						<p>Hidden</p>
					</div>	
				)}
				<button onClick={ this.handleChange }>Change</button>
			</div>
		);
	}
}

export default Main;
