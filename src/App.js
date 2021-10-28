import React from "react"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Profile} from "./pages/Profile"
import {Education} from "./pages/Education"
import {Navbar} from "./components/Navbar"
import {Skills} from "./pages/Skills"

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container pt-4">
                <Switch>
                    <Route path={"/"} exact component={Profile} />
                    <Route path={"/education"} exact component={Education} />
                    <Route path={"/skills"} exact component={Skills} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App