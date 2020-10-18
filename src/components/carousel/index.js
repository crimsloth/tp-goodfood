import React, { Component } from "react";
import Slider from "react-slick";

// Style 
import "./index.scss"


//* FLECHES----------------------------------------------------
//* FLECHES----------------------------------------------------
//* FLECHES----------------------------------------------------
//TODO: className = "slick-arrow"
//TODO: opacite .75 -> 1
//TODO: override le style du before des fleches avec un background image (mettre un height et width, display block...)

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}			
		/>
	);
} 
function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		/>
	);
}
//* -----------------------------------------------------------
//* -----------------------------------------------------------
//* -----------------------------------------------------------

export default class Carousel extends Component {

	render() {
		const settings = {
			dots: false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />
		}; //TODO: modifier les sampleArrow avec mes images

		let items = [];
			
		
		return (
			<div className="carousel">
				<Slider className="carousel__content" {...settings}> 
					{this.props.children}
				</Slider>
			</div>
		); 
	}
}