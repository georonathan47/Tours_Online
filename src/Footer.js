import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
	return (
		<footer className="card-footer bg-transparent ">
			<div className="justify-content-center">
			<FaFacebook color="blue" size="1.5rem" onClick={`https://www.facebook.com/denimtours`}/> 
			|	<FaInstagramSquare
				className="instagram"
				color="whitesmoke"
				size="1.5rem"
				onClick={`https://www.instagram.com/denim`}
			/>{" "}
			| <FaTwitter color="#00acee" size="1.5rem" onClick={`https://www.twitter.com/denimtours`}/>
			</div>
		</footer>
	);
}

export default Footer;
