import React, {Component} from 'react';
import {
    ActionSheet,
    Article,
    Popup,
    PopupHeader,
    Cells,
    Cell,
    CellHeader,
    CellsTitle,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Radio,
    TextArea,
    SearchBar,
    Button
} from 'react-weui'

import Children from '../components/Children'
import Header from '../components/Header'
import Medals from '../components/Medals'

class Teacher extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            //child
            child: null,
            //actions
            showAction: false,
            isToggleDisplay: false,
            menus: [
                {
                    label: '为小朋友定制评价标签',
                    onClick: () => {
                        this.showMedalPopup()
                    }
                }, {
                    label: '一键询问',
                    onClick: () => {
                        this.showAskPopup()
                    }
                },
                {
                    label: '评价该孩子',
                    onClick: () => {
                        this.showChildPopup()
                    }
                },
                {
                    label: '查看家长留言',
                    onClick: () => {
                        this.showParentsPopup()
                    }
                }/*,
                {
                    label: '养成表最新信息',
                    onClick: () => {
                        this.showParentsPopup()
                    }
                }*/
            ],
            actions: [
                {
                    label: '取消',
                    onClick: this.hide.bind(this)
                }
            ],
            //popup ask
            ask_show: false,
            //popup medal
            medal_show: false
        };
        this.showAction = this.showAction.bind(this);
        this.showAskPopup = this.showAskPopup.bind(this);
        this.showChildPopup = this.showChildPopup.bind(this);
        this.showParentsPopup = this.showParentsPopup.bind(this);
        this.onChooseAsk = this.onChooseAsk.bind(this);
        this.onChooseChild = this.onChooseChild.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.showMedalPopup = this.showMedalPopup.bind(this);
    }

    //隐藏幼儿操作选框
    hide() {
        this.setState({showAction: false});
    }

    //点击意见询问选框
    showAskPopup() {
        this.hide();
        this.setState({ask_show: true});
    }

    //点击评价该孩子选框
    showChildPopup() {
        this.hide();
        this.setState({child_show: true});
    }

    //点击查看家长留言选框
    showParentsPopup() {
        this.hide();
        this.setState({parents_show: true});
    }

    //选择具体的询问内容后触发
    onChooseAsk() {
        this.setState({ask_show: false})
    }

    //评价完孩子之后触发
    onChooseChild() {
        this.setState({child_show: false})
    }

    //处理完家长留言之后触发
    onChooseParents() {
        this.setState({parents_show: false})
    }

    //弹出选择称号弹框
    showMedalPopup() {
        this.hide();
        this.setState({medal_show: true});
    }
    //选择了具体称号
    onChooseMedal() {
        this.setState({medal_show: false});
    }

    //点击幼儿弹出操作选项
    showAction(child) {
        this.setState({child, showAction: true});
    }

    //搜索框
    handleChange(text, e) {
        let keywords = [text];

    }

    //点击家长留言回复显示回复框
    handleClick() {
        this.setState(preState => ({
            isToggleDisplay: !preState.isToggleDisplay
        }))
    }

    render() {

        return (
            <div>

                <Header title="我的学生" desc="选择具体幼儿执行对应操作"/>

                <SearchBar
                    onChange={this
                    .handleChange
                    .bind(this)}
                    placeholder="请输入姓名搜索"
                    lang={{
                    cancel: '取消'
                }}/>

                <CellsTitle>今日未评价的学生</CellsTitle>
                <Children onClickChild={this.showAction} row="1"/>
                <CellsTitle>今日已评价的学生</CellsTitle>
                <Children onClickChild={this.showAction}/>

                <ActionSheet
                    menus={this.state.menus}
                    actions={this.state.actions}
                    show={this.state.showAction}
                    type="ios"
                    onRequestClose={e => this.setState({showAction: false})}/>

                <Popup
                    show={this.state.ask_show}
                    onRequestClose={e => this.setState({ask_show: false})}>
                    <PopupHeader
                        left="取消"
                        right="确定"
                        leftOnClick={e => this.setState({ask_show: false})}
                        rightOnClick={e => this.onChooseAsk()}/>

                    <CellsTitle>请选择询问内容</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>{"【" + (this.state.child
                                    ? this.state.child.name
                                    : '幼儿') + "】为什么今日未到园区？"}</CellBody>
                            <CellFooter>
                                <Radio
                                    name="radio1"
                                    value={"【" + (this.state.child
                                    ? this.state.child.name
                                    : '幼儿') + "】为什么今日未到园区？"}
                                    defaultChecked/>
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>{"【" + (this.state.child
                                    ? this.state.child.name
                                    : '幼儿') + "】为什么今日迟到？"}</CellBody>
                            <CellFooter>
                                <Radio
                                    name="radio1"
                                    value={"【" + (this.state.child
                                    ? this.state.child.name
                                    : '幼儿') + "】为什么今日迟到？"}/>
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>{"【" + (this.state.child
                                    ? this.state.child.name
                                    : '幼儿') + "】今日是否带药？带了什么药？"}</CellBody>
                            <CellFooter>
                                <Radio
                                    name="radio1"
                                    value={"【" + (this.state.child
                                    ? this.state.child.name
                                    : '幼儿') + "】今日是否带药？带了什么药？"}/>
                            </CellFooter>
                        </FormCell>
                    </Form>
                    <CellsTitle>自定义询问内容</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellBody>
                                <TextArea placeholder="请输入询问家长内容" rows="3" maxlength="200"></TextArea>
                            </CellBody>
                        </FormCell>
                    </Form>
                </Popup>

                <Popup
                    show={this.state.child_show}
                    onRequestClose={e => this.setState({child_show: false})}>
                    <PopupHeader
                        left="取消"
                        right="确定"
                        leftOnClick={e => this.setState({child_show: false})}
                        rightOnClick={e => this.onChooseChild()}/>

                    <CellsTitle>对【{this.state.child?this.state.child.name:"-"}】小朋友进行评价</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellBody>
                                <TextArea placeholder="对不同时间段该小朋友的吃，喝，拉，睡，玩，衣进行简单评价" rows="6" maxlength="200"></TextArea>
                            </CellBody>
                        </FormCell>
                    </Form>
                </Popup>

                <Popup
                    show={this.state.parents_show}
                    onRequestClose={e => this.setState({parents_show: false})}>
                    <PopupHeader
                        left="取消"
                        right="确定"
                        leftOnClick={e => this.setState({parents_show: false})}
                        rightOnClick={e => this.onChooseParents()}/>

                    <CellsTitle>【{this.state.child?this.state.child.name:"-"}】小朋友家长的留言</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellBody>
                                <Article>
                                            <p>谢谢老师的辛苦付出！</p>
                                </Article>

                            </CellBody>
                            <CellFooter>
                                <Button type="default" size="small" onClick={this.handleClick.bind(this)}>回复</Button>
                            </CellFooter>
                        </FormCell>
                    </Form>



                    <Form style={{display: this.state.isToggleDisplay ? 'block' : 'none'}}>
                        <CellsTitle>回复【{this.state.child?this.state.child.name:"-"}】小朋友家长的留言：</CellsTitle>
                        <FormCell>
                            <CellBody>
                                <TextArea placeholder="请输入回复内容" rows="3" maxlength="200"></TextArea>
                                <CellFooter>
                                    <Button type="primary" size="small" >评论</Button>
                                </CellFooter>
                            </CellBody>
                        </FormCell>
                    </Form>
                </Popup>

                <Popup
                    show={this.state.medal_show}
                    onRequestClose={e => this.setState({medal_show: false})}>
                    <PopupHeader
                        left="取消"
                        right="确定"
                        leftOnClick={e => this.setState({medal_show: false})}
                        rightOnClick={e => this.onChooseMedal()}/>
                    <CellsTitle>为【{this.state.child?this.state.child.name:"-"}】小朋友设置称号</CellsTitle>
                    <Medals/>
                </Popup>

            </div>
        );
    }
}

export default Teacher;