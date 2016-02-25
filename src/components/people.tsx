import * as React from 'react';

export interface Props extends React.Props<any>{
    pkey: string;
    name: string;
}

export class Component extends React.Component<Props, any> {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

