import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import {Switch, Route} from "react-router-dom"

import Home from "./pages/home"
import Menu from "./pages/menu"
import Prix from "./pages/prix"
import Blog from "./pages/blog"
import Faq from "./pages/faq"
import Anne from "./pages/anne-marie"
import Cartes from "./pages/cartes"
import Dejeuner from "./pages/dejeuner"
import Wow from "./pages/wow"

import NavBar from "./components/header"


function App() {    
    return (
        <div>
            <NavBar />
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
            </Switch>
        </div>
    )
}

ReactDOM.render(<Router><App /></Router>,document.getElementById("root"))
