import React from 'react';

/*
 ===== Belajar Handling Event Pada Function Component =====

 A. Handling Event
    Setiap method yang ingin kita gunakan
		saat handling event harus kita deklarasikan
		di dalam function baik sesudah ataupun 
		sebelum keyword return. Ketika kita, 
		menghandle event, ada kalanya kita ingin
		menghentikan aksi default dari element
		yang kita beri event. Oleh sebab itu, kita
		harus menggunakan preventDefault.

		Memanggil Method :
		<elementHTML onNamaEventNya={namaMethod}>Konten</elementHTML>

		Memanggil Method Sekaligus Menghentikan Aksi Default Sebuah Element :
		<elementHTML onNamaEventNya={(e) => namaMethod(e)}>Konten</elementHTML>

		Memanggil Method Sekaligus Passing Parameter :
		<elementHTML onNamaEventNya={() => namaMethod(parameter)}>Konten</elementHTML>
*/

function Header(props) {

	// Dekelarasi Setiap Method Disini
	function showAlert(message, e) {
		e.preventDefault();
		alert('Handling Event in Function Component');
		alert(message);
	}

	return(
		<div>
			<h3>Handling Event Pada Function Component</h3>
			<a href="/" onClick={e => showAlert(props.message ,e)}>Handling Event Function Component</a>
		</div>
	);
}

export default Header;
