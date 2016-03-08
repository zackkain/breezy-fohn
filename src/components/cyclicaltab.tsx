import React = require("react");
import Tab = require("material-ui/lib/tabs/tab");
import Cyclical = require("../models/cyclical")

export interface State {
    cyclical: Cyclical.ICyclical        
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
