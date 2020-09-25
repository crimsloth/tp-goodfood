import React from "react"
import "./index.scss"

function CcmFiche (props) {
	return(
		<div className="fiches">
			<div className="fiches__image">
				<img src={props.image} alt={props.alt}></img>
			</div>
			<div className="fiches__title">
				<h4>{props.title}</h4>
			</div>
			<div className="fiches__content">
				{props.children}
			</div>
		</div>
	)
}

export default CcmFiche