import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Switch, Route } from "react-router-dom"

// Import global css
import "./assets/scss/global.scss"

// Pages
import Home from "./pages/home"

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
				<Route path="/"><Home /></Route>
			</Switch>
			<Footer />
		</div>
	)
}

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"))



//? notes: avait skip le carousel de membre, fait le squelette de engagement.



// TODO SECTION ========================================================================================================

//! ----------------------------------------------------|  GLOBAL  |----------------------------------------------------

// TODO: Importer les typos (salvo, work, harriet, etc.) dans le font.scss
//! Harriet Text est payante
//? Trouver font gratuite pour Harriet ou laisser faire

// TODO: Ajuster le weight dans tout le site en utilisant la manière expliqué en demo

// TODO: Ahouter les button souoer et dejeuner au carousel et faire le state

// TODO: gérer le carousel pour ajouter celui du component Membre

//! ----------------------------------------------------|  NAVBAR  |----------------------------------------------------

// TODO: Setup le langue component sur le site (3 spots) avec les medias
//? revoir alignement top avec Mentors

// TODO: Faire les hover pour le navbar (ligne dynamique en dessous)
//? Voir Mentors

// TODO: Faire le menu burger.
// * voir transform-origin pour le point d'ancrage des barre qui morph

//! ----------------------------------------------------|   HOME   |----------------------------------------------------

// TODO: Faire le X qui va fermer Offer.
//* le X va etre un button avec un onClick qui trigger un state qui display non le Offer (faire en class)

// TODO: Gerer le min-height du carousel (voir fichier)
//! reste à fix ceux qui sont pas égaux

// TODO: fix le svg du CCM play button pour turn white quand on hover + animation

//! ----------------------------------------------------|  FOOTER  |----------------------------------------------------

// TODO ================================================================================================================




//? ==================================================================================================================== 
//? ============================================|  QUESTIONS POUR MENTORS  |============================================
//? ==================================================================================================================== 

//! ----------------------------------------------------|  GLOBAL  |----------------------------------------------------

//? Aide pour le weight du CSS (priorités)
//* .navbar .navbar__exemple

//? Comment mettre la Typo
//* voir scss de typo

//? Branches GitKraken Spaghetti...
//* tutoriel fait avec t1gu1

//! ----------------------------------------------------|  NAVBAR  |----------------------------------------------------

//? Help pour CSS des hover du navbar...again
//* 

//! ----------------------------------------------------|   HOME   |----------------------------------------------------

//? HALP pour le slider Carousel (Carousel)

//* Comment bien target le css?
// Import une image en objet pour fleche et remplace green par elle?
//TODO: voir le fichier

//* State pour les boutons dejeuner et souper? On cache ou autre?
//TODO: juste changer l'array

//? Comment permettre le signe du Nº1? du <H1> de (home__slider-content)
//* importer la font (done)

//? Svg Play du button de (home__comment content) semble pas fonctionner
//* rechercher une infinite loop, 

//? Comment superposer les image et empecher de passer par dessus le navbar?
//* absolute / relative (done)

//? fix les images de CCM pour les mettres egal (4e weird)
//* done

//? fix le container "FLEX" du play
//* done

//? Goutières globales que je casse dans home?
//* on a toute cassé

//! ----------------------------------------------------|  FOOTER  |----------------------------------------------------

//? Comment faire que le accueil du footer remet en haut de la page? ( avec un #?)
//* avec un onClick={test ? scrollTop : () => {}}    
//* window.scrollTo({ top: 0, behavior : 'smooth' });

//? ====================================================================================================================
//? ====================================================================================================================

//notes :

// box-sizing: border-box permet de calculer le padding DANS le 100% du width et non l'ajouter apres
// a ete ajouter au global