import React from "react"
import "./index.scss"
import EngageComp from "./EngageComp"

function Engagement () {

	return (

		<div className="engagement">
			<div className="engagement__top">
				<h2 className="engagement__title">Nos engagements</h2>
				<EngageComp
					title="Des ingrédients de qualité"
					text="Nos ingrédients sont toujours frais, saisonniers et proviennent directement de partenaires et fournisseurs à qui nous faisons confiance."
				/>
				<EngageComp
					title="Redonner à la communauté"
					text="À l’achat de chaque panier Goodfood, nous contribuons à offrir un repas nutritif pour un enfant dans le besoin à son école."
				/>
			</div>
			<div className="engagement__bottom">
				<h2>Qui nous sommes</h2>
				<EngageComp
					title="Notre histoire"
					text="Jonathan Ferrari, Neil Cuggy et Raffi Krikorian ont fondé Marché Goodfood en 2014 avec l’objectif de changer notre façon de cuisiner au Québec."
				/>
				<EngageComp
					title="Sur le blog"
					text="Apprenez à connaître l’équipe, et obtenez un aperçu derrière les coulisses."
				/>
			</div>
		</div>
	)
}

export default Engagement