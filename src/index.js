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


// ? Questions:
// ? -------------------------------------------
// ? Qualité du css en rapport avec BEM...?
// ? Comment on fait le X de fermeture du Offer? (histoire de cookie? voir note de Gui plus bas)
// ? repositionnement du francais / english en bas de la page avec media?
// ? Importer les typos (salvo, work, harriet, etc.).
// ? Questions sur le folder scss.
// ? Comment center le footer + garder en bas de la page?
// ? Explication sur les commentaires de login de navbar.js?
// ? Comment faire les hover du navbar?
// ? Comment faire que le accueil du footer remet en haut de la page? ( avec un #?)
// ? Pour le home, je fais tout dans "page" ou je fais un folder home dans component et j'import le stock de la?


// TODO: ------------------
// TODO: Importer les typos.
// TODO: Faire les hover du navbar.
// TODO: Faire le main content.




function App() {
    return (
        <div>
            <Header />
			{/* Pourquoi offer ici? Car il ne scroll pas avec le menu et il est surement présent sur toutes les pages. 
			Reste fermé avec un cookie (cookie à voir en dernier)
			(Sauvegarge une valeur même après le refresh ou être partie d'un page web) */}
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
