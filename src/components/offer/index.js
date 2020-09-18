import React from "react"

// components
import Button from "../button"

// Style
import "./index.scss"


// TODO: Setup le X pour fermer Offer.

function Offer () {
    return (
		<div className="offer">
			<p className="offer__texte">3 repas GRATUITS avec votre première livraison et évitez la file d'épicerie! Nouveaux clients seulement.</p>
			<Button to="/offre">Profiter de l'offre</Button>
		</div>
    )
}
/* <div className="offer_content"> */
/* </div> */
/* <div className="offer__close">
<a className="offer__x" href="#">✖</a>
</div> */

export default Offer