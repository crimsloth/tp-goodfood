import React from "react"
import { Link } from "react-router-dom"

// Style
import "./index.scss"

function Button(props) {

	let style = null;
	if (props.vide) {
		style = "button__vide"
	} else {
		style = "button__plein"
	}

	style += " " + props.className
	return (
		<Link onClick={props.onClick} className={style + " link-button"} to={props.to}>
			{props.children}
		</Link>
	)
}

export default Button