import React, { Component } from 'react';
import sennin from '../data/sennin';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mahasiswa: [
				{
					nama: 'Mathius',
					nim: '20570006'
				},
				{
					nama: 'Rizki Ramadhan',
					nim: '20660001'
				},
				{
				 nama: 'Fadhli Fadhilah',
				 nim: '20772102'
				}
			]
		};
	}

	render() {

		const history = [
			{
				nama: 'Ootsutsuki Indra',
				kekuatan: 'Mangekyou Sharingan'
			},
			{
				nama: 'Ootsutsuki Ashura',
				kekuatan: 'Sennin & Mokuton'
			}
		];

		return(
			<div>
				<h4>Data Dari State</h4>
				{ this.state.mahasiswa.map((item, index) => {
					return (
						<ol key={ index }>
							<li>
								Nama : { item.nama }
							</li>
							<li>
								NIM: { item.nim }
							</li>
						</ol>
					);
				})}

				<h4>Data Dari Props</h4>
				{ this.props.shinobi.map((item, index) => (
					<ol key={ index }>
						<li>
							Nama : { item.nama }
						</li>
						<li>
							Kekuatan: { item.kekuatan }
						</li>
					</ol>
				)) }

				<h4>Data dari sebuah Variable Internal</h4>
				{ history.map((item, index) => (
					<ol key={ index }>
						<li>
							Nawa : { item.nama }
						</li>
						<li>
							Chikara: { item.kekuatan }
						</li>
					</ol>
				))}

				<h4>Data dari sebuah variable External</h4>
				{ sennin.map((item, index) => (
					<ol key={ index }>
						<li>
							Nama Sennin : { item.nama }
						</li>
						<li>
							Kekuatan Sennin: { item.kekuatan }
						</li>
					</ol>
				))}
			</div>
		);
	}
}

export default Main;
