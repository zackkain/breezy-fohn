import React = require("react");

export interface State {
    
}

export interface Props extends React.Props<any> {
    state?: State;
}

export class Component extends React.Component<Props, State> {
    /**
     *
     */
    constructor(props?: Props) {
        super(props);
    }
    
    render() {
        return (
         <div>Welcome to Breezy Föhn!</div>   
        );
    }
}