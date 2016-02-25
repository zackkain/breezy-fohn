"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var IconButton = require("material-ui/lib/icon-button");
var NavigationClose = require("material-ui/lib/svg-icons/navigation/close");
var LeftNav = require("material-ui/lib/left-nav");
var MenuItem = require("material-ui/lib/menus/menu-item");
var AppBar = require("material-ui/lib/app-bar");
var App = (function (_super) {
    __extends(App, _super);
    /**
     *
     */
    function App(props) {
        var _this = this;
        _super.call(this, props);
        this.handleToggle = function () {
            return _this.setState({ open: !_this.state.open });
        };
        this.state = { open: false };
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement(AppBar, {title: "Breezy Föhn", onLeftIconButtonTouchTap: this.handleToggle}), 
            React.createElement(LeftNav, {open: this.state.open}, 
                React.createElement(AppBar, {title: "Menu", showMenuIconButton: false, iconElementRight: React.createElement(IconButton, null, 
                    React.createElement(NavigationClose, null)
                )}), 
                React.createElement(MenuItem, null, "Living Room"), 
                React.createElement(MenuItem, null, "Kitchen"), 
                React.createElement(MenuItem, null, "Master Bedroom"), 
                React.createElement(MenuItem, null, "Master Bathroom"), 
                React.createElement(MenuItem, null, "Guest Bedroom"), 
                React.createElement(MenuItem, null, "Guest Bath"))));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=app.js.map