import React from 'react';

/*
 ===== Belajar Membuat Component Dengan Function Component =====

 Selain dengan Class Component, kita juga dapat
 membuat Component dengan menggunakan Function
 Component. Penulisannya bisa menggunakan
 function declaration dan juga arrow function

 A. Internal Function Component
	  rumus :
		const NamaComponent = () => {
			return(
				<div>
					kode-kode html disini
				</div>
			);
		}

*/

// import External Function Component
import Description from './components/Description';

// Membuat Internal Function Component dengan menggunakan Arrow Function
const Header = () => {
	return(
		<div>
			<h3>Membuat Internal Function Component</h3>
			<p>
				Component ini dibuat dengan menggunakan 
				Function Component di dalam file yang sama.
			</p>
		</div>
	);
}

// Membuat Internal Function Component dengan menggunakan Function Declaration
function App() {
	return(
		<div>
			<h1>Belajar Function Component</h1>
			{/* 
				Memanggil Component Header yang dibuat 
				dengan menggunakan Internal Function 
				Component
			*/}
			<Header />
			{/*
				Memanggil Component Descriptioni yang dibuat
				dengan menggunakan External Function
				Component.
			*/}
			<Description />
		</div>
	);
}

export default App;
