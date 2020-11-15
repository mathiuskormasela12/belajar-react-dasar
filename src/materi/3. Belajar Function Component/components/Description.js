import React from 'react';

/*
 ===== Belajar External Function Component ====

 Dalam membuat sebuah component, baik menggunakan
 Class Component ataupun Function Component, lebih
 dianjurkan untuk membuat component di file yang 
 terpisah. Dalam membuat External Function Component
 kita juga wajib untuk meng-import Reactnya, walau
 secara tidak kasat mata, component Reactnya tidak
 kita gunakan.

 rumus :
 import React from 'react';

 function NamaComponent() {
		return(
			<div>
				kode-kode html disini
			</div>
		);
 }

 export default NamaComponent;
*/

function Description() {
	return <div>
						<h4>Belajar External Function Component</h4>
						<p>Component ini dibuat dengan menggunakan Exteranal Function Component</p>
				 </div>
}

export default Description;
