import React from "react"
import "./index.scss"

// components
import Button from "../../button"



// TODO: Setup les langues pour utiliser ce component plusieurs fois
//* 1) dans le topbar en haut a droite
//* 2) dans le burger menu et juste afficher le language non-utilisé
//* 3) dans le footer en bas selon le resize du media

// Sera probablement display none s'il n'est pas utilisé et display block s'il l'est



// ! Revoir avec state ==============================================
// ! CSS dans button ================================================

function Langue (props) {
	
	
	return (
		<div>
            <nav className="button">
				<Button fr  to="/fr">Français /</Button>
				<Button en to="/en">English</Button>
			</nav>
		</div>
    )
}

export default Langue

// ! Revoir avec state ==============================================