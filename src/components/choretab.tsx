import React = require("react");
import Tab = require("material-ui/lib/tabs/tab");
import List = require("material-ui/lib/lists/list");
import ListItem = require("material-ui/lib/lists/list-item");
import IconButton = require("material-ui/lib/icon-button");
import FontIcon = require("material-ui/lib/font-icon");
import moment = require("moment");
import Chore = require("../models/chore")

export interface State {
    chores: Chore.IChore[]    
}

export interface Props extends React.Props<any> {
    state?: State;
}

var chores: Chore.IChore[] = [
    { key: 1, name: "Vacuum", nextDate: new Date(), period: moment.duration(1, "Week") }
];

export class Component extends React.Component<Props, State> {
    /**
     *
     */
    constructor(props: Props) {
        super(props);
        this.state = {chores: chores};
    }
      
    listItemTouchTapHandler = (key: number) => {
        console.info(key);
    }
    
    render() {
        var listItems = this.state.chores.map(chore => {
            return (<ListItem 
                key={chore.key}
                primaryText={chore.name} 
                onTouchTap={this.listItemTouchTapHandler.bind(this, chore.key)}
            />);
        });
        return (
            <div>
                <List>{listItems}</List>
            </div>  
        );
    }
}
