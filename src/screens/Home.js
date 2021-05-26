import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import denims from "../images/blacvr.jpg";
import logo from "../images/blaq_vr.jpg";
import vr from "../images/hammer.jpg";

import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

function Home() {
	return (
		<div
			id="carousel"
			className="carousel slide"
			data-ride="carousel"
			data-interval="6500"
		>
			<div className="carousel-inner">
				{/* contents */}
				<div className="carousel-item active">
					<img src={vr} alt="" className="w-100" />
					<div className="carousel-caption">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-8 bg-custom d-none d-lg-block py-3 px-0">
									<h1>Denim Travel and Tour</h1>
									<div className="border-top border-primary w-50 mx-auto my-3"></div>
									<h3 className="pd-3">Lorem ipsum ...</h3>
									{/* change from virtual  to something else later*/}
									<a href="#carousel" className="btn btn-danger btn-lg mr-2">
										View Demo
									</a>
									<a href="#carousel" className="btn btn-primary btn-lg ml-2">
										Start Tour
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="carousel-item">
					<img src={denims} alt="" className="w-100" />
					<div className="carousel-caption">
						<div className="container">
							<div className="row justify-content-end">
								<div className="col-5 bg-custom d-none d-lg-block py-3 px-0 pr-3">
									<h3 className="pd-3">Lorem ipsum ...</h3>

									<p className="lead pb-4">
										Travel around the world with us...
									</p>
									<a href="#carousel" className="btn btn-danger btn-lg">
										Contact Us
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="carousel-item">
						<img src={logo} alt="" className="w-100" />
						<div className="carousel-caption">
						<div className="container">
							<div className="row justify-content-start">
								<div className="col-7 bg-custom d-none d-lg-block py-3 px-0 pl-3">
									<h3 className="pd-3">Lorem ipsum ...</h3>

									<p className="lead pb-4">
										Travel around the world with us...
									</p>
									<a href="#carousel" className="btn btn-primary btn-lg">
										Contact Us
									</a>
								</div>
							</div>
						</div>
					</div>

					</div>

					<div className="carousel-item">
						<img src={vr} alt="" className="w-100" />
					</div>
				</div>
				{/* next and previous buttons */}
				<a
					href="#carousel"
					className="carousel-control-prev"
					role="button"
					data-slide="prev"
				>
					<FaChevronLeft size="2em" color="black" />
				</a>

				<a
					href="#carousel"
					className="carousel-control-next"
					role="button"
					data-slide="next"
				>
					{/* <FontAwesomeIcon icon="next" /> */}
					<FaChevronRight size="2em" color="black"/>
				</a>
				
			</div>

		</div>

	);
}

export default Home;
