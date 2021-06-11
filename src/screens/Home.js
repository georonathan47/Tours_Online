import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import denims from "../images/blacvr.jpg";
import logo from "../images/blaq_vr.jpg";
import vr from "../images/Black.jpg";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function Home() {
	return (
		<Carousel>
			<Carousel.Item interval={6500000} className="active">
				<img className="d-block w-100" src={vr} alt="First slide" />
				<Carousel.Caption className="carousel-caption ">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-8 bg-custom d-none d-lg-block py-3 px-0">
								<h3 className="pd-3">Denim Travel and Tour</h3>
								<div className="border-top border-primary w-50 mx-auto my-3" />
								<p className="pd-4 lead">
									Nulla vitae elit libero, a pharetra augue mollis.
								</p>
								<Button
									className="btn btn-primary mr-2"
									variant="primary"
									size="sm"
								>
									Contact Us
								</Button>
							</div>
						</div>
					</div>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item interval={6500}>
				<img className="d-block w-100" src={denims} alt="Second slide" />
				<Carousel.Caption className="carousel-caption ">
					<div className="container">
						<div className="row justify-content-start">
							<div className="col-8 bg-custom d-none d-lg-block py-3 px-0">
								<h3 className="pd-3">Travel in ghana with us</h3>
								<div className="border-top border-primary w-50 mx-auto my-3" />
								<p className="pd-4 lead">
									Nulla vitae elit libero, a pharetra augue mollis.
								</p>
								<Button
									className="btn btn-danger mr-2"
									variant="danger"
									size="sm"
								>
									View Demo
								</Button>
							</div>
						</div>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={6500}>
				<img className="d-block w-100 " src={logo} alt="Third slide" />
				<Carousel.Caption className="carousel-caption">
					<div className="container">
						<div className="row justify-content-end">
							<div className="col-8 bg-custom d-none d-lg-block py-3 px-0">
								<h3 className="pd-3">Travel in ghana with us</h3>
								<div className="border-top border-primary w-50 mx-auto my-3" />
								<p className="pd-3">
									Nulla vitae elit libero, a pharetra augue mollis.
								</p>
							</div>
						</div>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Home;
