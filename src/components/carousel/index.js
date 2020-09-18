import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "red" }}
			onClick={onClick} 
		/>
	);
}


// ! Revoir la configuration du carousel ===================================================
//? Import une image en objet et remplace green par elle?
//? On gosse dans le css d'origine ou on guess un nouveau qui fit?
// ! Revoir la configuration du carousel ===================================================


function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "green" }}
			onClick={onClick}
		/>
	); 
}

export default class CustomArrows extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />
		};

		return (
			<div>
				<h2>Custom Arrows</h2>
				<Slider {...settings}>
					<div>
						<h3>1</h3>
					</div>
					
					<div>
						<h3>2</h3>
					</div>
					
					<div>
						<h3>3</h3>
					</div>
					
					<div>
						<h3>4</h3>
					</div>
					
					<div>
						<h3>5</h3>
					</div>
					
					<div>
						<h3>6</h3>
					</div>
				</Slider>
			</div>
		);
	}
}