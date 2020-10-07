import { Link } from "react-router-dom"
import React from "react"
import "./index.scss"

// TODO: Setup les langues pour utiliser ce component plusieurs fois
//* 1) dans le topbar en haut a droite
//* 2) dans le burger menu et juste afficher le language non-utilisé
//* 3) dans le footer en bas selon le resize du media

// Sera probablement display none s'il n'est pas utilisé et display block s'il l'est



// ! Revoir avec state 
// ! CSS dans les links

function Langue () {
	
	
	return (
		<div className="langue">
            <nav className="langue__box">
				<Link className="langue__fr" to="/fr">Français</Link>
				<p className="langue__slash">/</p>
				<Link className="langue__en" to="/en">English</Link>
			</nav>
		</div>
    )
}

export default Langue
