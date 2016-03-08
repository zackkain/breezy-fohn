import React = require("react");
import { Link, browserHistory } from "react-router";
import IconButton = require("material-ui/lib/icon-button");
import FontIcon = require("material-ui/lib/font-icon");
import LeftNav = require("material-ui/lib/left-nav");
import MenuItem = require("material-ui/lib/menus/menu-item");
import AppBar = require("material-ui/lib/app-bar");
import * as auth from '../modules/auth';
import { Component as Content } from './content.tsx';
import { Component as About } from "./about.tsx";

export interface State {
    loggedIn: boolean;
    open: boolean;
}

export interface Props extends React.Props<any> {
    state?: State;
}

export class Component extends React.Component<Props, State> {
    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.object.isRequired
    }
    context: {router: HistoryModule.History };
  
    /**
     *
     */
    constructor(props?: Props) {
        super(props);
        this.state = { loggedIn: auth.loggedIn(), open: false };
    }
    
    private updateAuth(loggedIn: boolean) : void {
        this.setState({loggedIn: loggedIn, open: this.state.open});
    }

    componentWillMount() {
        auth.onChange = this.updateAuth.bind(this);
        auth.login(null, null);
    }
    
    handleToggle = () =>     
        this.setState({ loggedIn: this.state.loggedIn, open: !this.state.open });
    
    handleNavigateToLogin(event: React.TouchEvent, item: React.ReactElement<any>) {
        browserHistory.push("/login");
        this.close();
    }
    
    handleNavigationToLogout(event: React.TouchEvent, item: React.ReactElement<any>) {
        browserHistory.push("/logout");
        this.close();
    }
    
    private close() {
        this.setState({ loggedIn: this.state.loggedIn, open: false });
    }
    
    render() : JSX.Element {
        return(
            <div>
                <AppBar title="Breezy Föhn" onLeftIconButtonTouchTap={this.handleToggle}/>
                <LeftNav open={this.state.open}>
                    <AppBar 
                        title="Menu" 
                        showMenuIconButton={false} 
                        iconElementRight={
                            <IconButton onTouchTap={this.handleToggle}>
                            <FontIcon className="material-icons">close</FontIcon>
                            </IconButton>} 
                            
                            />
                            <MenuItem onTouchTap={this.handleNavigateToLogin.bind(this)}>Sign In</MenuItem>
                            <MenuItem onTouchTap={this.handleNavigationToLogout.bind(this)}>Log Out</MenuItem>
                </LeftNav>
                {this.props.children}
            </div>
            
        );
    }
    
}