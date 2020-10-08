import React from "react"
import { Link } from "react-router-dom"
import Langue from "../../langue"

// Style
import "./index.scss"

function TopBar() {
    return (
        <div className="topBar">
			<div className="topBar__box">
				<div className="topBar__pdg">
					<p className="topBar__texte">Un mot de notre PDG : Soutien à nos membres en cette période du COVID-19.</p>
					<Link className="topBar__note" to="/pdg">Lire la note</Link>
				</div>
			</div>
			<Langue />
        </div>
    )
}

export default TopBar