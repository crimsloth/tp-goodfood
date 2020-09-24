import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Switch, Route } from "react-router-dom"

// Import global css
import "./assets/scss/global.scss"

// Pages
import Home from "./pages/home"
import Menu from "./pages/menu"
import Prix from "./pages/prix"
import Blog from "./pages/blog"
import Faq from "./pages/faq"
import Anne from "./pages/anne-marie"
import Cartes from "./pages/cartes"
import Dejeuner from "./pages/dejeuner"
import Wow from "./pages/wow"
import Login from "./pages/login"
import Subscribe from "./pages/subscribe"

// Components
import Header from "./components/header"
import Footer from "./components/footer"
import Offer from "./components/offer"


// Carousel
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";



function App() {
	return (
		<div>
			<Header />
			<Offer />
			<Switch>
				<Route exact path="/"><Home /></Route>
				<Route path="/menu"><Menu /></Route>
				<Route path="/prix"><Prix /></Route>
				<Route path="/blog"><Blog /></Route>
				<Route path="/faq"><Faq /></Route>
				<Route path="/anne-marie"><Anne /></Route>
				<Route path="/cartes"><Cartes /></Route>
				<Route path="/dejeuner"><Dejeuner /></Route>
				<Route path="/wow"><Wow /></Route>
				<Route path="/login"><Login /></Route>
				<Route path="/subscribe"><Subscribe /></Route>
			</Switch>
			<Footer />
		</div>
	)
}

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"))





// TODO SECTION ========================================================================================================

//! ----------------------------------------------------|  GLOBAL  |----------------------------------------------------

// TODO: Importer les typos (salvo, work, harriet, etc.) dans le font.scss
//* face-font avec css et parametrer les fonts.

//! ----------------------------------------------------|  NAVBAR  |----------------------------------------------------

// TODO: Setup le langue component sur le site (3 spots)
//? Voir Mentors pour le weight du css

// TODO: Faire les hover pour le navbar (ligne dynamique en dessous)
//? Voir Mentors

// TODO: Faire le menu burger.
// * voir transform-origin pour le point d'ancrage des barre qui morph

//! ----------------------------------------------------|   HOME   |----------------------------------------------------

// TODO: Faire le X qui va fermer Offer.
//* le X va etre un button avec un onClick qui trigger un state qui display non le Offer (faire en class)

//! ----------------------------------------------------|  FOOTER  |----------------------------------------------------

// TODO ================================================================================================================




//? ==================================================================================================================== 
//? ============================================|  QUESTIONS POUR MENTORS  |============================================
//? ==================================================================================================================== 

//! ----------------------------------------------------|  GLOBAL  |----------------------------------------------------

//? Aide pour le weight du CSS (priorités)
//* 

//? Comment mettre la Typo
//* 

//? Branches GitKraken Spaghetti...
//* 

//! ----------------------------------------------------|  NAVBAR  |----------------------------------------------------

//? Help pour CSS des hover du navbar...again
//* 

//! ----------------------------------------------------|   HOME   |----------------------------------------------------

//? HALP pour le slider Carousel (Carousel)
//* fix la fluidité du drag?
//* Comment bien target le css?
// Import une image en objet pour fleche et remplace green par elle?
// On gosse dans le css d'origine ou on guess un nouveau qui fit?
//* State pour les boutons dejeuner et souper? On cache ou autre?

//? Comment permettre le signe du Nº1? du <H1> de (home__slider-content)
//* 

//? Svg Play du button de (home__comment content) semble pas fonctionner
//* 

//? Comment superposer les image et empecher de passer par dessus le navbar?
//* 

//? fix les images de CCM pour les mettres egal (4e weird)
//* 

//? fix le container "FLEX" du play
//* 

//? Goutières globales que je casse dans home?
//*

//! ----------------------------------------------------|  FOOTER  |----------------------------------------------------

//? Comment faire que le accueil du footer remet en haut de la page? ( avec un #?)
//* avec un onClick={test ? scrollTop : () => {}}    
//* window.scrollTo({ top: 0, behavior : 'smooth' });

//? ====================================================================================================================
//? ====================================================================================================================