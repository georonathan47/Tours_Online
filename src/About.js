import "./About.css";
import denim from "./images/denim_3D.jpg";
import React from "react";

function About() {
	return (
		// <div className="normal">
		// 	<div classaName="about-us">
		// 		<h2>About Us</h2>
		// 		<p className="paragraph">
		// 			Denim Travel and Tour is a registered and licensed travel and tour
		// 			company located in Koforidua, Ghana.
		// 			<br /> Ghana Tours Online is a subsidiary project of Denim Travel and
		// 			Tour which focuses on showing virtual Ghana
		// 			<br /> tours online to everyone anywhere in the world. COVID-19 has
		// 			created a huge gap in the tourism <br />
		// 			industry in the world where people cannot travel to their favorite
		// 			tourist destinations.
		// 			<br /> Ghana Tours Online solves this problem by providing virtual
		// 			tours of these tourist attractions on our website which can be
		// 			accessed anywhere in the world without traveling.
		// 			<br />
		// 		</p>
		// 	</div>
		// </div>
		<div className="container my-5">
			<div className="row py-4">

				<div className="col-lg-4 mb-4 my-lg-auto">
					<h1 className="text-dark font-weight-bold mb-3 text">About Us</h1>
					<p className="mb-4 textt">Denim Travel and Tour is a registered and licensed travel and tour company located in Koforidua, Ghana. Ghana Tours Online is a subsidiary project of Denim Travel and Tour which focuses on showing virtual Ghana tours online to everyone anywhere in the world. COVID-19 has created a huge gap in the tourism	industry in the world where people cannot travel to their favorite tourist destinations. Ghana Tours Online solves this problem by providing virtual tours of these tourist attractions on our website which can be accessed anywhere in the world without traveling.</p>
				</div>
				
				<div className="col-lg-8">
					<img src={denim} alt="" className="w-100" />
				</div>
			</div>
		</div>
	);
}

export default About;
