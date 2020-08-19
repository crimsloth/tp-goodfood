import React from "react"
import {Link} from "react-router-dom"
// import marcheGoodfood from "/assets/img/menu/marche-goodfood.png"
import marcheGoodfood from "../../../assets/img/menu/marche-goodfood.png"

function NavBar() {    
    return (
        <div>
            <Link to="/"><img src={marcheGoodfood} alt="Goodfood" /></Link>
            <Link to="/menu">au menu</Link>
            <Link to="/prix">prix</Link>
            <Link to="/blog">blog</Link>
            <Link to="/faq">faq</Link>
            <Link to="/anne-marie">anne-marie withenshaw</Link>
            <Link to="/cartes">cartes cadeaux</Link>
            <Link to="dejeuner">déjeuner</Link>
            <Link to="/wow">goodfood wow</Link>
        </div>
    )
}
export default NavBar