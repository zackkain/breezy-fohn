import React = require("react");
import Tab = require("material-ui/lib/tabs/tab");
import Durable = require("../models/durable")

export interface State {
    durable: Durable.IDurable        
}

export interface Props extends React.Props<any> {
    state?: State;
}

export class Component extends React.Component<Props, any> {
    /**
     *
     */
    constructor(props: Props) {
        super(props);
    }
    
    render() {
        return (
          <div></div>
        );
    }
}
