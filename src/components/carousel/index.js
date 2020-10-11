import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../../components/card"
import list from "../../assets/list"

// Style 
import "./index.scss"

const { dejeuner, souper } = { ...list } 

//* FLECHES----------------------------------------------------
//TODO: className = "slick-arrow"
//TODO: opacite .75 -> 1
//TODO: 
//TODO: 


function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}			
		/>
	);
} //TODO: override le style du before des fleches avec un background image (mettre un height et width, display block...)

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
			
		if (this.props["type"] === "souper") items = souper
		if (this.props["type"] === "dejeuner") items = dejeuner
		
		// console.log(this.props["type"])

		return (
			<div className="carousel">
				<Slider className="carousel__content" {...settings}> 
					{items.map(item => {return <Card {...item} type={this.props["type"]} />})}
				</Slider>
			</div>
		); 
	}
}