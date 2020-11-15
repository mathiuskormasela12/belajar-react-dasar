import React from 'react';

/*
 ======== Belajar Function Component ========

 Dalam membuat Function Component, ada dua cara
 yang dapat kita gunakan yaitu dengan menggunakan
 Function Declaration & Arrow Function.
*/

// Arrow Function Dengan Variable
const Jikoshoukai = () => {
	const data = {
		nama: 'Mathius',
		usia: 18
	};

	return(
		<div>
			<p>Mina-san konnichiwa, watashi wa { data.nama } soshite watashi wa { data.usia } sai desu.</p>
		</div>
	);
}

// Arrow Function Dengan Variable
const Title = () => (
	<div>
		<header>
			<h5>Ini Title</h5>
		</header>
	</div>
);

// Function Declaration Dengan Variable
function Content() {
	
	const nama = 'Mathius';
	
	return(
		<div>
			<p>Component ini dibuat dengan menggunakan Arrow Function</p>
			<Title />
			<p>Hey nama saya {nama}</p>
			<Jikoshoukai />
		</div>
	);
}

export default Content;
