import React, { useState } from "react"
import Carousel from "../carousel"
import Button from "../button"
import "./index.scss"

function MenuSemaine () {

	const [menuActif, setMenuActif] = useState("souper")

	const buttonPlein = "menuSemaine__buttons-plein"
	const buttonVide = "menuSemaine__buttons-vide"

	const handleClick = (type) => {
		setMenuActif(type);
	}

	let classButtonSouper = buttonVide;
	let classButtonDejeuner = buttonVide;
	
	if (menuActif === "souper" ){
		classButtonSouper = buttonPlein;
	} else if (menuActif === "dejeuner"){
		classButtonDejeuner = buttonPlein;
	}

	return (
		<div className="menuSemaine">
			<div className="menuSemaine__header">
				<h2 className="menuSemaine__title">Qu'est-ce qu'il y a au menu cette semaine ?</h2>
				<div className="menuSemaine__buttons">
					<Button onClick={() => {handleClick("souper")}} className={classButtonSouper + " menuSemaine__buttons-spec"} vide>Souper</Button>
					<Button onClick={() => {handleClick("dejeuner")}} className={`${classButtonDejeuner} menuSemaine__buttons-spec`} vide>Déjeuners</Button>
				</div>
			</div>
			<Carousel type={menuActif}></Carousel>
		</div>
	)
}

export default MenuSemaine