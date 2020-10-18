import React, { useEffect, useState } from "react"
import Carousel from "../carousel"
import Button from "../button"
import Card from "../card"

import items from "../../assets/list" //Cette ligne devrais plus exister, ou du moins etre moins utiliser.

import "./index.scss"

function MenuSemaine () {

	// TODO: fetch liste de recette a afficher avec soit Axios ou fetch() -- REACT HOOKS ! 

	fetch('http://localhost:8080/recettes?type') 
		.then(res => res.json())
		.then(data => console.log(data.data))




	const [menuActif, setMenuActif] = useState("souper")

	const buttonPlein = "menuSemaine__buttons-plein"
	const buttonVide = "menuSemaine__buttons-vide"

	const handleClick = (type) => {
		setMenuActif(type);
	}

	let classButtonSouper = buttonVide;
	let classButtonDejeuner = buttonVide;

	// ici la source de dej/souper devrais changer, voir meme suprimer
	const dejeuner = items.dejeuner;
	const souper = items.souper;

	let content = null;
	if (menuActif === "souper" ){
		classButtonSouper = buttonPlein;
		content = souper;
	} else if (menuActif === "dejeuner"){
		classButtonDejeuner = buttonPlein;
		content = dejeuner;
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
			<Carousel> 
				{content.map(item => {return <Card {...item} />})}
			</Carousel>
			{/* <ComponentVraimentCustom/> */}
		</div>
	)
}

export default MenuSemaine