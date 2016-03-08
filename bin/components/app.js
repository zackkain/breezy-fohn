"use strict";
const React = require("react");
const react_router_1 = require("react-router");
const IconButton = require("material-ui/lib/icon-button");
const FontIcon = require("material-ui/lib/font-icon");
const LeftNav = require("material-ui/lib/left-nav");
const MenuItem = require("material-ui/lib/menus/menu-item");
const AppBar = require("material-ui/lib/app-bar");
const auth = require('../modules/auth');
class Component extends React.Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.handleToggle = () => this.setState({ loggedIn: this.state.loggedIn, open: !this.state.open });
        this.state = { loggedIn: auth.loggedIn(), open: false };
    }
    updateAuth(loggedIn) {
        this.setState({ loggedIn: loggedIn, open: this.state.open });
    }
    componentWillMount() {
        auth.onChange = this.updateAuth.bind(this);
        auth.login(null, null);
    }
    handleNavigateToLogin(event, item) {
        react_router_1.browserHistory.push("/login");
        this.close();
    }
    handleNavigationToLogout(event, item) {
        react_router_1.browserHistory.push("/logout");
        this.close();
    }
    close() {
        this.setState({ loggedIn: this.state.loggedIn, open: false });
    }
    render() {
        return (React.createElement("div", null, 
            React.createElement(AppBar, {title: "Breezy Föhn", onLeftIconButtonTouchTap: this.handleToggle}), 
            React.createElement(LeftNav, {open: this.state.open}, 
                React.createElement(AppBar, {title: "Menu", showMenuIconButton: false, iconElementRight: React.createElement(IconButton, {onTouchTap: this.handleToggle}, 
                    React.createElement(FontIcon, {className: "material-icons"}, "close")
                )}), 
                React.createElement(MenuItem, {onTouchTap: this.handleNavigateToLogin.bind(this)}, "Sign In"), 
                React.createElement(MenuItem, {onTouchTap: this.handleNavigationToLogout.bind(this)}, "Log Out"))));
    }
}
Component.contextTypes = {
    router: React.PropTypes.object.isRequired
};
exports.Component = Component;
//# sourceMappingURL=app.js.map