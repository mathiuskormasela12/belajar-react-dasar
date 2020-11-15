import React from 'react';

function Header(props) {

	/*
	 ===== Belajar Props Pada Function Component =====

	 Props atau Property merupakan sebuah nilai
	 yang dapat di kirim kedalam sebuah component.
	 Props hanya dapat di read, namun tidak bisa
	 di write.

	 Pada Function Component kita mengambil nilai
	 Props melalui parameter pertama dari Function
	 tersebut.
	*/
	// Mengambil Object Props dan Meng-destructuring Objectnta
	const {
		frontend: f,
		backend: b
	} = props;

	return(
		<div>
			<header>
				{/* Mengambil langsung nilai props */}
				<h1>Hello { props.nama }</h1>
				<p>I am { props.usia } years old</p>
				<p>I am able to build Website using { f } as Frontend and { b } as Backend</p>
			</header>
		</div>
	);
}

export default Header;
