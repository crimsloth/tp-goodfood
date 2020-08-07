import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./pages/home"
import Test from "./pages/test"

function App() {    
    return (
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
    )
}

ReactDOM.render(<Router><App /></Router>,document.getElementById("root"))
