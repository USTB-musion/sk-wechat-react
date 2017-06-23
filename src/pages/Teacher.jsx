import React, {Component} from 'react';
import {
    ActionSheet,
    Popup,
    PopupHeader,
    CellsTitle,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Radio,
    TextArea,
    SearchBar
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
            menus: [
                {
                    label: '称号标注',
                    onClick: () => {
                        this.showMedalPopup()
                    }
                }, {
                    label: '一键询问',
                    onClick: () => {
                        this.showAskPopup()
                    }
                }
            ],
            actions: [
                {
                    label: '取消',
                    onClick: this
                        .hide
                        .bind(this)
                }
            ],
            //popup ask
            ask_show: false,
            //popup medal
            medal_show: false
        };
        this.showAction = this
            .showAction
            .bind(this);
        this.showAskPopup = this
            .showAskPopup
            .bind(this);
        this.onChooseAsk = this
            .onChooseAsk
            .bind(this);
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

    //选择具体的询问内容后触发
    onChooseAsk() {
        this.setState({ask_show: false})
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