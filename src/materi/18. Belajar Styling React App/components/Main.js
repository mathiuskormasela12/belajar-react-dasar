import React from 'react';
import './main.css';

// Internal Style as JSON
const internal = {
	"font-weight": "bold",
	"font-style": "italic",
	"text-decoration": "line-through"
};

// Internal as plain object
const gaya = {
	fontSize: '18px',
	marginLeft: '20px'
};

function Main() {
	return(
		<div>
			<h4>Ada 4 Cara untuk Styling React App</h4>
			<ol>
				{
					// Inline Style
				}
				<li style={{ color: 'red', backgroundColor: 'limegreen' }}>
					Inline Style
				</li>
				<li style={ gaya }>
					Internal Style
				</li>
				<li className="external">
					External Style
				</li>
			</ol>
		</div>
	);
}

export default Main;
