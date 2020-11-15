import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

	/*render() {
		return (
			<div className="App">
      	<header className="App-header">
        	<img src={logo} className="App-logo" alt="logo" />
        	<p>
          	Edit <code>src/App.js</code> and save to reload.
        	</p>
        	<a
          	className="App-link"
          	href="https://reactjs.org"
          	target="_blank"
          	rel="noopener noreferrer"
        	>
          	Learn React
        	</a>
      	</header>
    	</div>
		);
	}*/
	
	/*
	 ========== Belajar Menampilkan Hello React ==========

	 Didalam component React, kita dapat menuliskan
	 kode-kode html. Kode-kode html tersebut harus
	 dituliskan di dalam method render sebagai return
	 valuenya.

	 rumus :
		1. Cara Pertama
			 a. Membuat Single Element
			 		render() {
						return (
							<h1>Hello React</h1>
						);
					}
		   b. Membuat Multi Element
			 		render() {
						return (
							<div>
								<h1>Hello React</h1>
								<p>Belajar React Js</p>
							</div>
						);
					}
		2. Cara Kedua
			 a. Membuat Single Element
			 		render() {
						return <h1>Hello React</h1>
					}
			 b. Membuat Multi Element
			    render() {
						return <div>
											<h1>Hello React</h1>
											<p>Belajar React Js</p>
									 </div>
					}
		keterangan :
		Ketika kita membuat multi element html
		semua element htmlnya wajib dibungkus oleh sebuah 
		element lain, contohnya element div. Karena 
		kalau tidak di bungkus dengan element lain,
		maka React akan error.
	*/

	render() {

		return	<div>
							<h1>Hello React</h1>
							<p>React Js is a Javascript Library for building user interface</p>
						</div>
	}

}

export default App;
