import React from "react";
import "./navbar.css";
import * as ReactBootStrap from "react-bootstrap";
import denim from "../images/logo.png";

import { FaPhone } from "react-icons/fa";

function navbar() {
	return (
		<ReactBootStrap.Navbar
			collapseOnSelect
			expand="lg w-100"
			bg="#d4af37"
			// variant="dark"
		>
			<img src={denim} alt="logo" className="logo" />
			<a href="#home">
				<p className="number">
					{" "}
					<FaPhone /> Tel: +233 24 855 9331
				</p>
			</a>
			<ReactBootStrap.Navbar.Brand href="#home" className="text">
				{/* Tel: +233 24 855 9331 */}
			</ReactBootStrap.Navbar.Brand>
			<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" bg="#fff">
				<ReactBootStrap.Nav className="mr-auto">
					<div className="ml-auto">
						<ReactBootStrap.Nav.Link href="#features">
							Home
						</ReactBootStrap.Nav.Link>
						<ReactBootStrap.Nav.Link href="#pricing">
							About Us
						</ReactBootStrap.Nav.Link>
						<ReactBootStrap.NavDropdown
							title="More"
							id="collasible-nav-dropdown"
						>
							<ReactBootStrap.NavDropdown.Item href="#action/3.1">
								Virtual Tour
							</ReactBootStrap.NavDropdown.Item>
							<ReactBootStrap.NavDropdown.Item href="#action/3.2">
								Contact
							</ReactBootStrap.NavDropdown.Item>
							<ReactBootStrap.NavDropdown.Divider />
							<ReactBootStrap.NavDropdown.Item href="#action/3.4">
								...
							</ReactBootStrap.NavDropdown.Item>
						</ReactBootStrap.NavDropdown>
					</div>
				</ReactBootStrap.Nav>
				{/* <ReactBootStrap.Nav>
					<ReactBootStrap.Nav.Link href="#deets">
						Virtual Tours
					</ReactBootStrap.Nav.Link>
					<ReactBootStrap.Nav.Link eventKey={2} href="#memes">
						Contact
					</ReactBootStrap.Nav.Link>
				</ReactBootStrap.Nav> 
				*/}
			</ReactBootStrap.Navbar.Collapse>
		</ReactBootStrap.Navbar>
	);
}

export default navbar;
