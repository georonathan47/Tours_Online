import React from "react";
import "./navbar.css";
import "./Home"
import denim from "../images/logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone } from "react-icons/fa";

function navbar() {
	return (
		<nav className="navbar navbar-light navbar-expand-lg">
			<div className="container">
				{/* logo */}
				<a href="./Home" className="navbar-brand">
					<img src={denim} alt="Logo" />
				</a>
				<FaPhone className="phone"/><p>Tel: +233 24 855 9331</p>
				{/* Hamburger Menu */}
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="space ml-auto"/>
				{/* navbar menu */}
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item"><a href="./Home.js" className="nav-link">Home</a></li>
						<li className="nav-item"><a href="a" className="nav-link">About</a></li>
						<li className="nav-item"><a href="ab" className="nav-link">Virtual Tours</a></li>
						<li className="nav-item"><a href="ac" className="nav-link">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default navbar;
