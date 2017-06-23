import React, {Component} from 'react';
import {Flex, FlexItem} from 'react-weui'
import Child from './Child'
import users from '../user'

class Children extends Component {

    render() {

        const rows = users.map((arr, idx) => {

            if(this.props.row && this.props.row > 0 ){

                if(idx >= this.props.row) return ;
            }

            const cols = arr.map((user, index) => {                
                return <FlexItem
                    key={"col-" + idx + "-" + index}
                    onClick={() => {
                    this
                        .props
                        .onClickChild(user)
                }}>
                    <Child item={user}/>
                </FlexItem>
            })
            return <Flex key={"row-" + idx}>{cols}</Flex>

        })

        return (
            <div >
                {rows}
            </div>
        );
    }
}

export default Children;