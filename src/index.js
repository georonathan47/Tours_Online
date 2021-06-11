import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./screens/navbar";
import Home from "./screens/Home";
import Contacts from "./Contacts";
import About from "./About";
import Scroll from "./Scroll"
import Footer from "./Footer"

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
	<React.StrictMode>
		<Navbar />
		<Home />
		<About />
		<Scroll showBelow={600} />
		<Contacts />
		<Footer />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
