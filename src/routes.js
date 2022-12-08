import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home/App'
import Clients from './Clients/index'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/orders" component={Clients} />
            </Switch>
        </Router>
    )
}

export default Routes