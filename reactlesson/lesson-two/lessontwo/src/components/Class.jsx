import React, { Component } from 'react';

export default class Class extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.type}</h1>
                <h1>{this.props.shirt}</h1>
                <h1>{this.props.size}</h1>
            </div>
        )
    }
}