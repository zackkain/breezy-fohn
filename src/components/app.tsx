import React = require("react");
import IconButton = require("material-ui/lib/icon-button");
import FontIcon = require("material-ui/lib/font-icon");
import LeftNav = require("material-ui/lib/left-nav");
import MenuItem = require("material-ui/lib/menus/menu-item");
import AppBar = require("material-ui/lib/app-bar");

export interface AppState {
    open: boolean;
}

export interface Props extends React.Props<any> {
    state?: AppState;
}

export class App extends React.Component<Props, any> {
    /**
     *
     */
    constructor(props: Props) {
        super(props);
        this.state = { open: false };
    }
    
    handleToggle = () =>     
        this.setState({open: !this.state.open });
    
    
    render() : JSX.Element {
        return (
            <div>
                <AppBar title="Breezy Föhn" onLeftIconButtonTouchTap={this.handleToggle}/>
                <LeftNav open={this.state.open}>
                    <AppBar 
                        title="Menu" 
                        showMenuIconButton={false} 
                        iconElementRight={<IconButton onTouchTap={this.handleToggle}><FontIcon className="material-icons">close</FontIcon></IconButton>} />
                    <MenuItem>Living Room</MenuItem>
                    <MenuItem>Kitchen</MenuItem>
                    <MenuItem>Master Bedroom</MenuItem>
                    <MenuItem>Master Bathroom</MenuItem>
                    <MenuItem>Guest Bedroom</MenuItem>
                    <MenuItem>Guest Bath</MenuItem>
                </LeftNav>
            </div>
        );
    }
}