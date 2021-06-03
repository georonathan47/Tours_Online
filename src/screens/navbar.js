import React from "react";
import "./navbar.css";
import home from "./Home"
import denim from "../images/logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone } from "react-icons/fa";
import Contacts from "../Contacts";

function navbar() {
	return (
		<nav className="navbar navbar-light navbar-expand-lg">
			<div className="container">
				{/* logo */}
				<a href="./Home" className="navbar-brand">
					<img src={denim} alt="Logo" />
				</a>
				<FaPhone className="phone"/><text>Tel: +233 24 855 9331</text>
				{/* Hamburger Menu */}
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="space mr-5"/>
				{/* navbar menu */}
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="nav ">
						<li className="nav-item"><a href="home" className="nav-link active">Home</a></li>
						<li className="nav-item"><a href="#" className="nav-link">About</a></li>
						<li className="nav-item"><a href="#" className="nav-link">Virtual Tours</a></li>
						<li className="nav-item"><a href={{Contacts}} className="nav-link">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default navbar;
