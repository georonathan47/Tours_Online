import "./Contacts.css";
import React from "react";

function Contacts() {
	return (
		<div className="page">
			<div className="small2" id="s4">
				<span className="#contacts">
					<div className="info">
            <h2>Address: </h2>
						<address>
							Denim Travel & Tour
							<br /> Inside Biney Plaza, Koforidua
							<br /> Eastern Region - Ghana
							<br /> West Africa
						</address>
					</div>
					<hr className="line_height" />
					<div className="details">
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
					<div className="forms">
						<form action="" method="post">
							<label className="label" for="email">
								Send us a message!
							</label>
							<br />
							<br />
							<input
								className="email"
								value="Type your message here!"
								name="Message"
								type="text"
							></input>
							<br />
							<br />
							<br />
							<button type="submit" className="button">
								Submit
							</button>
						</form>
					</div>
				</span>
			</div>
		</div>
	);
}

export default Contacts;
