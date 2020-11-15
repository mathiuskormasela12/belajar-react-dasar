import React from 'react';
import Main from './components/Main';

export default () => (
	<div>
		<h1>Belajar Looping List</h1>
		<Main shinobi={
			[
				{
					nama: 'Uzumaki Naruto',
					kekuatan: '9 Bijuu & Sennin'
				},
				{
					nama: 'Uchiha Sasuke',
					kekuatan: 'Mangekyou Sharingan & Rinnegan'
				}
			]
		}/>
	</div>
)
