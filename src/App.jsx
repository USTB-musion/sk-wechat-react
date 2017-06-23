import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {
  Cells,
  Cell,
  CellBody,
  CellFooter,
  CellHeader,
  CellsTitle,
  Flex,
  FlexItem,
} from 'react-weui';

import FontAwesome from 'react-fontawesome'

const pages = [
  {
    path: '/teacher',
    icon:'graduation-cap',
    title: '主班老师'
  }, {
    path: '/teacher-living',
    icon:'cutlery',
    title: '生活老师'
  }, {
    path: '/doctor',
    icon:'user-md',
    title: '保健医生'
  }, {
    path: '/parent',
    icon:'home',
    title: '家长'
  }
];

const MyLink = (props)=>{
  return <Cell access onClick={()=>{props.onClick(props.item.path)}}  >
            <CellHeader><FontAwesome name={props.item.icon} size="2x"/></CellHeader>
            <CellBody>{props.item.title}</CellBody>
            <CellFooter/>
        </Cell>
}

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.linkTo = this
      .linkTo
      .bind(this)
    this.state = {
      to: null
    }
  }

  linkTo(path) {
    this.setState({to: path})
  }

  render() {

    if (this.state.to) {
      return <Redirect to={this.state.to}/>
    }

    const cells = pages.map((item,index) => {
      return <MyLink onClick={this.linkTo} item={item} key={index}/>
    })

    return (
      <div>

       <Flex >
            <FlexItem style={{textAlign:"center",background:"#20a8d8"}}>
                <img src={require('./App.jpg')} style={{maxHeight:'200px'}} alt="智慧幼儿园"/>
            </FlexItem>
        </Flex>

        <CellsTitle>功能页面</CellsTitle>
        <Cells>{cells}</Cells>
      </div>
    );
  }
}

export default App;
