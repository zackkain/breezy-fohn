import React = require("react");
import ReactDOM = require("react-dom");
import { Router, Route, Link, browserHistory } from 'react-router';
import injectTapEventPlugin = require("react-tap-event-plugin");
import { Component as App } from "./components/app.tsx";
import { Component as Login } from "./components/login.tsx";
import { Component as Logout } from "./components/logout.tsx";
import { Component as Content } from "./components/content.tsx"
import * as auth from "./modules/auth";

injectTapEventPlugin();

function requireAuth(nextState: any, replace: (params: any) => void) {
    if(!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathName: nextState.location.pathname }
        });
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="login" component={Login} />
            <Route path="logout" component={Logout} />
            <Route path="main" component={Content} onEnter={requireAuth} />
        </Route>
    </Router>
), document.getElementById("container"));