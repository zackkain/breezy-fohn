"use strict";
///<reference path="../../typings/react-router/history.d.ts" />
const React = require("react");
const TextField = require("material-ui/lib/text-field");
const Card = require("material-ui/lib/card/card");
const CardText = require("material-ui/lib/card/card-text");
const CardActions = require("material-ui/lib/card/card-actions");
const FlatButton = require("material-ui/lib/flat-button");
const auth = require('../modules/auth');
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: auth.loggedIn(), error: false };
    }
    handleSubmit(event) {
        event.preventDefault();
        const email = this.refs["email"].getValue();
        const pass = this.refs["pass"].getValue();
        auth.login(email, pass, this.loginCallback.bind(this));
    }
    loginCallback(loggedIn) {
        if (!loggedIn)
            return this.setState({ error: true });
        const location = this.props.location;
        if (location.state && location.state.nextPathname) {
            this.context.router.replace(location.state.nextPathname);
        }
        else {
            this.context.router.replace("/main");
        }
    }
    updateAuth(loggedIn) {
        this.setState({ loggedIn: loggedIn });
    }
    render() {
        return (React.createElement("form", {onSubmit: this.handleSubmit.bind(this)}, 
            React.createElement(Card, null, 
                React.createElement(CardText, {style: {
                    display: "flex",
                    flexFlow: "center",
                    flexDirection: "column",
                    alignItems: "center"
                }}, 
                    React.createElement(TextField, {defaultValue: "zferraro@gmail.com", type: "email", ref: "email"}), 
                    React.createElement("br", null), 
                    React.createElement(TextField, {hintText: "password1", type: "password", ref: "pass"}), 
                    React.createElement("br", null)), 
                React.createElement(CardActions, {style: {}}, 
                    React.createElement(FlatButton, {label: "Login", type: "submit"})
                ))
        ));
    }
}
Component.contextTypes = {
    router: React.PropTypes.object.isRequired
};
exports.Component = Component;
//# sourceMappingURL=login.js.map