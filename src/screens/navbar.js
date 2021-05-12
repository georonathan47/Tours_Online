/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import "./navbar.css";
import denim from "../images/logo_png.png";

function navbar() {
	const [show, handleShow] = useState(false);

	const transitionNavBar = () => {
		if (window.screenY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		<div className="nav">
			<div className={`nav ${show && "nav_fade"}`}>
				<div className="nav_contents">
					<img className="nav_logo" src={denim} alt="Denim" />
				</div>
        
				<ul>
					<li className="list_content">
						<a href="#contact">Contact</a>
					</li>
					<li className="list_content">
						<a href="#about">About Us</a>
					</li>
					<li className="list_content">
						<a href="#home">Home</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default navbar;
