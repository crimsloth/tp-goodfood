import React from "react"
import NavBar from "./navbar"
import TopBar from "./topbar"
import Offer from "./offer"

// Style
import "./index.scss"

function Header() {
    return (
        <div className="header">
            <TopBar />
            <NavBar />
			<Offer />
        </div>
    )
}

export default Header