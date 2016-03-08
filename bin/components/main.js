"use strict";
const React = require("react");
const IconButton = require("material-ui/lib/icon-button");
const FontIcon = require("material-ui/lib/font-icon");
const LeftNav = require("material-ui/lib/left-nav");
const MenuItem = require("material-ui/lib/menus/menu-item");
const AppBar = require("material-ui/lib/app-bar");
const content_tsx_1 = require("./content.tsx");
class Component extends React.Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.handleToggle = () => this.setState({ open: !this.state.open });
        this.state = { open: false };
    }
    render() {
        return (React.createElement("div", null, 
            React.createElement(AppBar, {title: "Breezy Föhn", onLeftIconButtonTouchTap: this.handleToggle}), 
            React.createElement(LeftNav, {open: this.state.open}, 
                React.createElement(AppBar, {title: "Menu", showMenuIconButton: false, iconElementRight: React.createElement(IconButton, {onTouchTap: this.handleToggle}, 
                    React.createElement(FontIcon, {className: "material-icons"}, "close")
                )}), 
                React.createElement(MenuItem, null, "Living Room"), 
                React.createElement(MenuItem, null, "Kitchen"), 
                React.createElement(MenuItem, null, "Master Bedroom"), 
                React.createElement(MenuItem, null, "Master Bathroom"), 
                React.createElement(MenuItem, null, "Guest Bedroom"), 
                React.createElement(MenuItem, null, "Guest Bath")), 
            React.createElement(content_tsx_1.Component, null)));
    }
}
exports.Component = Component;
//# sourceMappingURL=main.js.map