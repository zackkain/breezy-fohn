"use strict";
const React = require("react");
const AppBar = require("material-ui/lib/app-bar");
const Tabs = require("material-ui/lib/tabs/tabs");
const Tab = require("material-ui/lib/tabs/tab");
const choretab_tsx_1 = require("./choretab.tsx");
const cyclicaltab_tsx_1 = require("./cyclicaltab.tsx");
const durabletab_tsx_1 = require("./durabletab.tsx");
class Component extends React.Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.state = { title: "Aggregate View" };
    }
    render() {
        return (React.createElement("div", null, 
            React.createElement(AppBar, {title: this.state.title, showMenuIconButton: false}), 
            React.createElement(Tabs, null, 
                React.createElement(Tab, {label: "Chores"}, 
                    React.createElement(choretab_tsx_1.Component, null)
                ), 
                React.createElement(Tab, {label: "Cyclical"}, 
                    React.createElement(cyclicaltab_tsx_1.Component, null)
                ), 
                React.createElement(Tab, {label: "Durable"}, 
                    React.createElement(durabletab_tsx_1.Component, null)
                ))));
    }
}
exports.Component = Component;
//# sourceMappingURL=content.js.map