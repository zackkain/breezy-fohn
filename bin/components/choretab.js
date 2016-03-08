"use strict";
const React = require("react");
const List = require("material-ui/lib/lists/list");
const ListItem = require("material-ui/lib/lists/list-item");
const moment = require("moment");
var chores = [
    { key: 1, name: "Vacuum", nextDate: new Date(), period: moment.duration(1, "Week") }
];
class Component extends React.Component {
    /**
     *
     */
    constructor(props) {
        super(props);
        this.listItemTouchTapHandler = (key) => {
            console.info(key);
        };
        this.state = { chores: chores };
    }
    render() {
        var listItems = this.state.chores.map(chore => {
            return (React.createElement(ListItem, {key: chore.key, primaryText: chore.name, onTouchTap: this.listItemTouchTapHandler.bind(this, chore.key)}));
        });
        return (React.createElement("div", null, 
            React.createElement(List, null, listItems)
        ));
    }
}
exports.Component = Component;
//# sourceMappingURL=choretab.js.map