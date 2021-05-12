import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// eslint-disable-next-line
import {useDispatch, useSelector} from "react-redux"
import "./App.css";
import Home from "./screens/Home.js"

function App() {

	return (
		<div className="App">
			<header className="App-header">
				<div />
				<div className="head">
					<h1 className="number">Tel: +233 (0) 55 973 9718</h1>
					<p className="top-left"></p>
				</div>
				<Router>
					<Switch>
						<Route exact path="/">
							{Home} 
						</Route>
					</Switch>
				</Router>
			</header>
			<div />
		</div>
	);
}

export default App;
