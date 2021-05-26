import "./Contacts.css";
import React from "react";
import Forms from "./Form.js"
import "bootstrap/dist/css/bootstrap.min.css";

function Contacts() {
	return (
		<div className="jumbotron py-5 mb-0">
			<div className="container">
				<div className="row align-items-start">
					<div className="col w-100">
						<h2>Address: </h2>
						<address>
							Denim Travel & Tour
							<br /> Inside Biney Plaza, Koforidua
							<br /> Eastern Region - Ghana
							<br /> West Africa
						</address>
					</div>

					<div className="col w-100">
						<h2>Mailing:</h2>
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
					{/* </div> */}

					<div className="col w-100">
						<Forms />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
