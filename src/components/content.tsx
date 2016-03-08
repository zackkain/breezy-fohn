import React = require("react");
import AppBar = require("material-ui/lib/app-bar");
import Tabs = require("material-ui/lib/tabs/tabs");
import Tab = require("material-ui/lib/tabs/tab");
import { Component as ChoreTab } from "./choretab.tsx";
import { Component as CyclicalTab } from "./cyclicaltab.tsx";
import { Component as DurableTab } from "./durabletab.tsx";

export interface AppState {
    title: string;
}

export interface Props extends React.Props<any> {
    state?: AppState;
}

export class Component extends React.Component<Props, any> {
    /**
     *
     */
    constructor(props: Props) {
        super(props);
        this.state = { title: "Aggregate View" };
    }
    
    render() {
        return (
            <div>
                <AppBar 
                    title={this.state.title}
                    showMenuIconButton={false} />
                <Tabs>
                    <Tab label="Chores"><ChoreTab /></Tab>
                    <Tab label="Cyclical"><CyclicalTab /></Tab>
                    <Tab label="Durable"><DurableTab /></Tab>
                </Tabs>
            </div>
        )
    }
}