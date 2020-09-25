import React from "react"
import { Link } from "react-router-dom"

// Style 
import "./index.scss"

// images
import marcheGoodfood from "../../../assets/img/menu/marche-goodfood.png"
import goodfoodwow from "../../../assets/img/svg/wow.svg"

// components
import Button from "../../button"


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isBurgerMenuOpen: true };
    }

    toggleMenu() {
        this.setState({ "isBurgerMenuOpen": !this.state.isBurgerMenuOpen });
    };

    render() {
        return (
            <div className="navbar" >
				<div className="navbar__box">
					<Link to="/" className="navbar__logo"><img src={marcheGoodfood} alt="Goodfood" /></Link>
					<div className={"navbar__burger-menu " + (this.state.isBurgerMenuOpen ? "navbar__burger-menu--open" : "")} onClick={() => this.toogleMenu()}>
						<div className="navbar__burger-menu-lines">___</div>
						<div className="navbar__burger-menu-lines">___</div>
						<div className="navbar__burger-menu-lines">___</div>
					</div>
					<nav className={"navbar__menu " + (this.state.isBurgerMenuOpen ? "navbar__menu--open" : "")}>
						<Link className="navbar__link" to="/menu">au menu</Link>
						<Link className="navbar__link" to="/prix">prix</Link>
						<Link className="navbar__link" to="/blog">blog</Link>
						<Link className="navbar__link" to="/faq">faq</Link>
						<Link className="navbar__link" to="/anne-marie">anne-marie withenshaw</Link>
						<Link className="navbar__link" to="/cartes">cartes cadeaux</Link>
						<Link className="navbar__link" to="/dejeuner">déjeuner</Link>
						<Link className="navbar__link" to="/wow"><img src={goodfoodwow} alt="goodfood wow" /></Link>
					</nav>
				</div>
				<nav className="button">
					<Button vide to="/login">Se connecter</Button>
					<Button to="/subscribe">S'inscrire</Button>
				</nav>
			</div>
        )
    }
}

export default NavBar