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

function App() {
    return (
        <div>
            <Header />
            {/* Pourquoi offer ici, car il ne scroll pas avec le menu et il est surement présent sur toutes les pages. Reste fermé avec un cookie (cookie à voir en dernier)(Sauvegarge une valeur même après le refresh ou être partie d'un page web) */}
            {/* <Offer /> */}
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
