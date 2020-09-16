import React from "react"
import { Link } from "react-router-dom"

// Style
import "./index.scss"


// TODO: Setup le X pour fermer Offer.

function Offer () {
    return (
		<div className="offer">
			{/* <div className="offer_content"> */}
				<p className="offer__texte">3 repas GRATUITS avec votre première livraison et évitez la file d'épicerie! Nouveaux clients seulement.</p>
				<Link className="offer__button" to="/offre">Profiter de l'offre</Link>
			{/* </div> */}
			{/* <div className="offer__close">
				<a className="offer__x" href="#">✖</a>
			</div> */}
		</div>
    )
}

export default Offer