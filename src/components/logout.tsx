import React = require("react");
import { Link } from "react-router";
import * as auth from '../modules/auth';

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
    
    componentDidMount() {
        auth.logout();
    }
    
    render() : JSX.Element {
        return (
            <p>You are now logged out.</p>
        );
    }
}