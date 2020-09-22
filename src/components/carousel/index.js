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
				<Slider {...settings}>
					{dejeuner.map(dej => {
						return <Card {...dej} type="dejeuner" />
					})}
					{souper.map(soup => {
						return <Card {...soup} type="souper" />
					})}
				</Slider> 
			</div> // map des dejeuners et soupers
		); 
	}
}





// ! Revoir la configuration du carousel ===================================================
//? Import une image en objet et remplace green par elle?
//? On gosse dans le css d'origine ou on guess un nouveau qui fit?
// ! Revoir la configuration du carousel ===================================================