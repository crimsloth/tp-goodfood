import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../../components/card"
import list from "../../assets/list"

const { dejeuner } = { ...list } //TODO: Ajouter (  , souper) rendu là.

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
				<Slider {...settings}>
					{dejeuner.map(dej => {
						return <Card {...dej} type="dejeuner" />
					})}
				</Slider>
			</div>
		);
	}
}





// ! Revoir la configuration du carousel ===================================================
//? Import une image en objet et remplace green par elle?
//? On gosse dans le css d'origine ou on guess un nouveau qui fit?
// ! Revoir la configuration du carousel ===================================================