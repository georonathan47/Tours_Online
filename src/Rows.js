import React /*{ useEffect, useState}*/ from "react";
import "./Rows.css";

function Rows() {
	return (
		<div className="main_container">
			<div className="big"></div>
			<div className="small1">container 1</div>
			<div className="small">container 2</div>
			<div className="small">container 3</div>
			<div className="small2" id="s4">
				<span className="#contacts">
					<div className="info">
						<address>
							Denim Travel & Tour
							<br /> Inside Biney Plaza, Koforidua
							<br /> Eastern Region - Ghana
							<br /> West Africa
							<hr />
						</address>
					</div>
					<div className="line_height" />
					<div className="details">
						<address>
							P. O. BOX KF 550,
							<br />
							Koforidua - Eastern Region
							<br />
							Ghana, West Africa
							<br />
							Email: <a href="#email">denimtravelandtour@gmail.com</a> <br />
							Email: <a href="#email">tour@ghanatoursonline.com</a>
							<br />
							WhatsApp & Phone: +233 24 855 9331
							<br />
						</address>
					</div>
					<div className="forms">
						<form action="" method="post">
  						<label className="label" for="email">Send us a message!</label><br/><br/>
  						<input className="email" value="Type  your message here!" name="Message" type="text"></input><br/><br/>
  						<button type="submit" className="button">Submit</button>
						</form>
					</div>
					<span />
				</span>
			</div>
		</div>
	);
}

export default Rows;
