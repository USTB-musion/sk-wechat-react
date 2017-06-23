import React, { Component } from 'react';
import Header from '../components/Header'
import Children from '../components/Children'
class Doctor extends Component {
    
    constructor(props, context) {
        super(props, context);
        this.onClickChild = this.onClickChild.bind(this)
    }
    
    onClickChild(child){

    }
    render() {
        return (
            <div>
                  <Header title="幼儿保健" desc="选择具体幼儿执行对应操作"/>
                  <Children onClickChild={this.onClickChild}/>
            </div>
        );
    }
}

export default Doctor;