import React, { Component } from 'react';
import Header from '../components/Header'
class Parent extends Component {
    render() {
        return (
            <div>
               <Header title="我的孩子" desc="这里是孩子成长的点点滴滴"/>
            </div>
        );
    }
}

export default Parent;