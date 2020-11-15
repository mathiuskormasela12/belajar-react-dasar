//import React, { Component } from 'react';
import React from 'react';

class Description extends React.Component {
	render() {
		return(
			<div>
				<h4>Belajar Membuat External Class Component</h4>
				<p>Component ini dibuat menggunakan Extrenal Class Component</p>
			</div>
		);
	}
}

export default Description;

/*
 ========== Belajar External Class Component ==========

 Dalam membuat Component dalam React Js, lebih disarankan
 untuk membuat component yang terpisah dengan file App.js
 atau component lainnya.

 rumus :
 1. Cara Pertama
 import React, { Component } from 'react';

 class NamaComponent extends Component {
 		render() {
			return(
				<div>
					kode-kode html
				</div>
			);
		}
 }

 export default NamaComponent;

 2. Cara Kedua
 import React from 'react';

 class NamaComponent extends React.Component {
	 	render() {
			return(
				<div>
					kode-kode html
				</div>
			);
		}
 }

 export default NamaComponent;
*/
