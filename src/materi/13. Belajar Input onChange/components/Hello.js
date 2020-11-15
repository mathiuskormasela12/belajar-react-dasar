import React from 'react';

export default  () => {

	function handleChange(e) {
		console.log(e.target.value);
	}


	return(
		<div>
			<input type="number" placeholder="Input Usia" onChange={ handleChange }/>
		</div>
	);
}
