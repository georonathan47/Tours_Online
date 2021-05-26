import React from "react";
import ReactDOM from "react-dom";

import "./components/AwesomeIcons";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./screens/navbar";
import Home from "./screens/Home";
import Contacts from "./Contacts";
import About from "./About";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<React.StrictMode>
		<Navbar />
		<Home />
		<About />
		<Contacts />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
