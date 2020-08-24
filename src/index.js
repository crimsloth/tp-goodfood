import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./pages/home"
import Test from "./pages/test"
import NavBar from "./components/header/navbar"

function App() {    
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/test">Test</Link>
                
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/test">
                        <Test />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

ReactDOM.render(<Router><App /></Router>,document.getElementById("root"))
