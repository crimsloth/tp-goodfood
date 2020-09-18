import React from "react"
import { Link } from "react-router-dom"

// Style
import "./index.scss"

function Button(props) {

	let style = null;
	if(props.vide) {
		style = "button__vide"
	} else {
		style = "button__plein"
	}

    return (
		<Link className="link-button" to={props.to}>
			<span className="button">
				<button className={style}>{props.children}</button>
			</span>
		</Link>
    )
}

export default Button