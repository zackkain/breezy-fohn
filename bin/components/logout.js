"use strict";
const React = require("react");
const auth = require('../modules/auth');
class Component extends React.Component {
    /**
     *
     */
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        auth.logout();
    }
    render() {
        return (React.createElement("p", null, "You are now logged out."));
    }
}
exports.Component = Component;
//# sourceMappingURL=logout.js.map