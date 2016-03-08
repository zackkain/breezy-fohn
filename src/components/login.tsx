///<reference path="../../typings/react-router/history.d.ts" />
import React = require("react");
import TextField = require("material-ui/lib/text-field");
import Card = require("material-ui/lib/card/card");
import CardHeader = require("material-ui/lib/card/card-header");
import CardText = require("material-ui/lib/card/card-text"); 
import CardActions = require("material-ui/lib/card/card-actions");
import FlatButton = require("material-ui/lib/flat-button");
import * as auth from '../modules/auth';

export interface State {
    loggedIn?: boolean;
    error?: boolean;
}

export interface Props extends React.Props<any> {
    state?: State;
    location: HistoryModule.Location;
}

export class Component extends React.Component<Props, State> {
    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.object.isRequired
    }
    context: {router: HistoryModule.History };
    
    constructor(props: Props) {
        super(props);
        this.state = { loggedIn: auth.loggedIn(), error: false };
        console.info("bwah!");
    }

    handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const email = ( this.refs["email"] as TextField).getValue();
        const pass = ( this.refs["pass"] as TextField).getValue();
        
        auth.login(email, pass, this.loginCallback.bind(this))
        
    }
  
    private loginCallback(loggedIn: boolean) {
        if(!loggedIn) return this.setState({error: true});
        
        const location = this.props.location;
        
        if(location.state && (location.state as any).nextPathname) {
            this.context.router.replace((location.state as any).nextPathname);
        } else {
            this.context.router.replace("/main");
        }
        
    }

    render() : JSX.Element {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <Card>
                    <CardText style={{
                        display: "flex",
                        flexFlow: "center",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <TextField 
                            defaultValue="zferraro@gmail.com" 
                            type="email"
                            ref="email"
                            /><br />
                        <TextField
                            hintText="password1"
                            type="password"
                            ref="pass"
                            /><br />
                    </CardText>
                    <CardActions style={{}}>
                        <FlatButton label="Login" type="submit" />
                    </CardActions>
                </Card>
            </form>
        );
    }
}