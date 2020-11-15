import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';

function Router() {
	return(
		<BrowserRouter>
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Route path="/" exact component={ Home } />
				<Route path="/about" component={ About } />
			</div>
		</BrowserRouter>
	);
}

export default Router;
