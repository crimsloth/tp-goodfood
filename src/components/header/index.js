import React from "react"
import NavBar from "./navbar"
import TopBar from "./topbar"

// Style
import "./index.scss"

function Header() {
    return (
        <div className="header">
            <TopBar />
            <NavBar />
        </div>
    )
}

export default Header