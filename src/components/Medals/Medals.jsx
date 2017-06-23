import React, { Component } from 'react';
import { Grids,Grid,GridIcon,GridLabel } from 'react-weui'

import * as ICON from './icons'
import './Medals.css'

const data = [
    {
        icon:<img src={ICON.icon_1} alt=""/>,
        label:'聪明之星'
    },
    {
        icon:<img src={ICON.icon_2} alt=""/>,
        label:'学习小标兵'
    },
    {
        icon:<img src={ICON.icon_3} alt=""/>,
        label:'可爱天使'
    },
    {
        icon:<img src={ICON.icon_4} alt=""/>,
        label:'智慧宝贝'
    },
    {
        icon:<img src={ICON.icon_5} alt=""/>,
        label:'故事大王'
    },
    {
        icon:<img src={ICON.icon_6} alt=""/>,
        label:'数学小标兵'
    },
    {
        icon:<img src={ICON.icon_7} alt=""/>,
        label:'巧手宝宝'
    },
    {
        icon:<img src={ICON.icon_8} alt=""/>,
        label:'全能小宝贝'
    },
    {
        icon:<img src={ICON.icon_9} alt=""/>,
        label:'环保小卫士'
    },
];

class Medals extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            data:data
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(item,index){
        item.checked = !item.checked;
        this.state.data[index] = item;
        this.setState({
            data:this.state.data
        })
    }

    render() {

        const grids = this.state.data.map((item,index)=>{
            
            const className = item.checked ? 'checked' : '';

            return <Grid key={"medal-"+index} onClick={()=>{this.toggle(item,index)}} className={className}>
                <GridIcon>{item.icon}</GridIcon>
                <GridLabel>{item.label}</GridLabel>
            </Grid>
        });

        return (
            <Grids className="medals">{grids}</Grids>
        );
    }
}

export default Medals;