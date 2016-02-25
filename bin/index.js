"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var injectTapEventPlugin = require("react-tap-event-plugin");
var app_tsx_1 = require("./components/app.tsx");
injectTapEventPlugin();
var app = React.createElement(app_tsx_1.App, null);
ReactDOM.render(app, document.getElementById("container"));
//# sourceMappingURL=index.js.map