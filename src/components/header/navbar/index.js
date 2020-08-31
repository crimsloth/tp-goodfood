import React from "react"
import { Link } from "react-router-dom"

// Style 
import "./index.scss"

// images
import marcheGoodfood from "../../../assets/img/menu/marche-goodfood.png"


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isBurgerMenuOpen: true };
    }

    toogleMenu() {
        this.setState({ "isBurgerMenuOpen": !this.state.isBurgerMenuOpen });
    };

    render() {
        return (
            <div className="navbar" >
                <Link to="/" className="navbar__logo"><img src={marcheGoodfood} alt="Goodfood" /></Link>

                <div className={"navbar__burger-menu " + (this.state.isBurgerMenuOpen ? "navbar__burger-menu--open" : "")} onClick={() => this.toogleMenu()}>
                    <div className="navbar__burger-menu-lines">___</div>
                    <div className="navbar__burger-menu-lines">___</div>
                    <div className="navbar__burger-menu-lines">___</div>
                </div>

                <div className={"navbar__menu " + (this.state.isBurgerMenuOpen ? "navbar__menu--open" : "")}>
                    <Link className="navbar__link" to="/menu">au menu</Link>
                    <Link className="navbar__link" to="/prix">prix</Link>
                    <Link className="navbar__link" to="/blog">blog</Link>
                    <Link className="navbar__link" to="/faq">faq</Link>
                    <Link className="navbar__link" to="/anne-marie">anne-marie withenshaw</Link>
                    <Link className="navbar__link" to="/cartes">cartes cadeaux</Link>
                    <Link className="navbar__link" to="dejeuner">déjeuner</Link>
                    <Link className="navbar__link" to="/wow">goodfood wow</Link>

                    {/* Not visible in desktop (Add props to make difference) props will be add to a class to make different style like (display: none;)*/}
                    {/* <Login /> */}
                </div>

                {/* Not visible in mobile (Add props to make difference) props will be add to a class to make different style like (display: none;)*/}
                {/* <Login /> */}
            </div>
        )
    }
}
export default NavBar