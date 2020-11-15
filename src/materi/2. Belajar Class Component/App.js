import React, { Component } from 'react';

// import external component
import Description from './components/Description';

/*
 ========== Belajar Membuat Component ==========

 Untuk membuat component di dalam React Js ada dua
 cara yaitu dengan menggunakan Class Component dan
 Function Component.

 Kali ini kita akan belajar bagaimana caranya
 membuat component dengan menggunakan Class
 Component di dalam file yang sama

 A. Membuat Component dengan menggunakan Class Component
 		rumus :
		class NamaComponent extends Component {
			render() {
				return (
					<elementPembungkus>
						kode-kode html
					</elementPembungkus>
				);
			}
		}
*/

// Membuat Component Header
class Header extends Component {
	render() {
		return (
			<h2>Ini Component yang dibuat menggunakan Class Component di dalam file yang sama</h2>
		);
	}
}

class App extends Component {
	
	render() {
		return (
			<div>
				<h1>Belajar Membuat Component</h1>
				{/* Memanggil Component Header */}
				<Header />
				{/* 
						Memanggil Component Description
						yang di import dari file lain.
				*/}
				<Description />
			</div>
		);
	}

}

export default App;
