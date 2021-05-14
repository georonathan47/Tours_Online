import React from "react"
import "./App.css";
import Navbar from "./screens/navbar"
import Home from "./screens/Home.js"

function App() {

	return (
		<div className="App">
			<header>
				<Navbar />
				<Home />
			</header>
			<div />
		</div>
	);
}

export default App;
