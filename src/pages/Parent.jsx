import React, {Component} from 'react';
import {
    Preview,
    PreviewHeader,
    PreviewFooter,
    PreviewBody,
    PreviewItem,
    PreviewButton,
    Tab,
    TabBarItem,
    Article
} from 'react-weui'
import FontAwesome from 'react-fontawesome'
import Header from '../components/Header'
class Parent extends Component {
    render() {
        return (
            <div>
                <Header title="我的孩子" desc="这里是孩子成长的点点滴滴"/>

                <Tab type="tabbar">
                    <TabBarItem icon={< FontAwesome name = "child" />} label="我的孩子">
                        <Preview>
                            <PreviewHeader>
                                <PreviewItem label="姓名" value="李学东"/>
                            </PreviewHeader>
                            <PreviewBody>
                                <PreviewItem label="Product" value="Name"/>
                                <PreviewItem label="Description" value="Product Description"/>
                                <PreviewItem
                                    label="Details"
                                    value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. "/>
                            </PreviewBody>
                            <PreviewFooter>
                                <PreviewButton primary>查看详情</PreviewButton>
                            </PreviewFooter>
                        </Preview>
                    </TabBarItem>
                    <TabBarItem icon={< FontAwesome name = "line-chart" />} label="成长轨迹">
                        <Article>
                            <h1>Page 2</h1>
                            <section>
                                <h2 className="title">Heading</h2>
                                <section>
                                    <h3>2.1 Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute</p>
                                </section>
                            </section>
                        </Article>
                    </TabBarItem>
                    <TabBarItem icon={< FontAwesome name = "heart-o" />} label="互动信息">
                        <Article>
                            <h1>Page 3</h1>
                            <section>
                                <h2 className="title">Heading</h2>
                                <section>
                                    <h3>3.1 Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute</p>
                                </section>
                            </section>
                        </Article>
                    </TabBarItem>
                </Tab>

            </div>
        );
    }
}

export default Parent;