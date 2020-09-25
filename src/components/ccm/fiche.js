import React from "react"
import "./index.scss"

function CcmFiche(props) {
	return (
		<div className="ccm__fiche">
			<div className="ccm__fiche-image">
				<img src={props.image} alt={props.alt}></img>
			</div>
			<div className="ccm__fiche-title">
				<h4>{props.title}</h4>
			</div>
			<div className="ccm__fiche-content">
				{props.children}
			</div>
		</div>
	)
}

export default CcmFiche