import React, { Component } from 'react';

class LifeCycle  extends Component{
  // 1.1 创建对象时调用
  constructor(props, context) {
    super(props, context);
    // this.setState();
  }
  // 1.2 渲染组件前调用 最好不要网络请求
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  // 1.3 渲染组件
  render() {

  }
  // 1.4 渲染完成调用 可以进行网络请求
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  // 1.5 组件卸载前调用
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  // 2.1 组件接收到新属性值时调用
  componentWillReceiveProps(nextProps) {
    console.log('Component WILL RECEIVE PROPS!')
  }
  // 2.2 判断是否应该更新，返回true更新
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  // 2.3 重新渲染组件前调用
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }
  // 2.4 渲染组件
  // render() {
  //
  // }
  // 2.5 组件重新渲染完成时调用
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }
  // 2.6 组件卸载前调用
  // componentWillUnmount() {
  //   console.log('Component WILL UNMOUNT!')
  // }
}
