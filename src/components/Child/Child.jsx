import React, { Component } from 'react';

import './Child.css'

class Child extends Component {
    render() {
        return (
            <div className="text-center child">
                
                <img src={this.props.item.headimgurl} alt={this.props.item.name} className="child-img"/>
                <h3>{this.props.item.name}</h3>
            </div>
        );
    }
}

export default Child;