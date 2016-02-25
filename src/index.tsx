import React = require("react");
import ReactDOM = require("react-dom");
import injectTapEventPlugin = require("react-tap-event-plugin");
import { App as App } from "./components/app.tsx";
declare var mountNode: any;

injectTapEventPlugin();

var app = <App  />;
ReactDOM.render(app, document.getElementById("container"));