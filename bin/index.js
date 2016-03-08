"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const react_router_1 = require('react-router');
const injectTapEventPlugin = require("react-tap-event-plugin");
const app_tsx_1 = require("./components/app.tsx");
const login_tsx_1 = require("./components/login.tsx");
const logout_tsx_1 = require("./components/logout.tsx");
const content_tsx_1 = require("./components/content.tsx");
const auth = require("./modules/auth");
injectTapEventPlugin();
function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathName: nextState.location.pathname }
        });
    }
}
ReactDOM.render((React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, 
    React.createElement(react_router_1.Route, {path: "/", component: app_tsx_1.Component}, 
        React.createElement(react_router_1.Route, {path: "login", component: login_tsx_1.Component}), 
        React.createElement(react_router_1.Route, {path: "logout", component: logout_tsx_1.Component}), 
        React.createElement(react_router_1.Route, {path: "main", component: content_tsx_1.Component, onEnter: requireAuth}))
)), document.getElementById("container"));
//# sourceMappingURL=index.js.map