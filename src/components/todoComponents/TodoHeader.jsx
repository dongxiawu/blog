import React, { Component } from 'react';

import TodoTextInput from './TodoTextInput';

import TodoAction from '../../actions/TodoActions';
import TodoStore from '../../stores/TodoStores';
import '../../stylesheets/scss/todo.scss';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createItemValue: ''
    }
    this.createItem = this.createItem.bind(this);
    this.toggleCompleteAll = this.toggleCompleteAll.bind(this);
  }
  // 绑定按钮的添加 todo item 的事件 事件中通过 todoAction 来触发dispatcher
  // 添加todo item 的处理方法，由todoAction.createItem 进行处理
  createItem() {
    // 组件中通过 TodoAction.createItem 触发 dispatcher的handleAction
    // 参数中的 actionType 是 CREATE data是 this.state.
    this.refs.addTodoInput.refs.inputRef.value = '';
    if(this.state.createItemValue.trim().length===0){
      alert("不能为空");
      return false;
    }
    TodoAction.createItem(this.state.createItemValue);
    // 清除输入框的值
    // this.refs.addTodoInput 指向的是 TodoTextInput 的Component实例
    // 而 this.refs.addTodoInput.refs.inputRef 指向的是 TodoTextInput实例中的 input 输入框
    this.refs.addTodoInput.refs.inputRef.value = '';
  }
  // 触发的是 TodoTextInput 中的 onChange事件
  inputChangeHandle(event) {
    this.setState({
      createItemValue: event.target.value
    });
  }
  // toggle 全部完成事件
  toggleCompleteAll() {
    TodoAction.toggleCompleteAll();
  }
  render() {
    let completedStyle = {};
    if (this.props.completed) {
      completedStyle = {
        color: styles.iconColor.ok
      };
    }
    return (
      <div>
        <h1 style={ styles.titleHeader }>Todos </h1>
        <div className="col-md-12 col-xs-12 todo-item-container">
          <div className="col-md-2 col-xs-4 icon-box">
            <span className="glyphicon glyphicon-saved" onClick={ this.toggleCompleteAll } style={ completedStyle } />
          </div>
          <div className="col-md-8 col-xs-6">
            <TodoTextInput
              ref='addTodoInput'
              refName='inputRef'
              val={ this.state.createItemValue }
              placeholder="What needs to be done?"
              change={ this.inputChangeHandle.bind(this) }>
            </TodoTextInput>
          </div>
          <div className="col-md-1 col-xs-2">
            <button className="btn btn-default " type="button" onClick={ this.createItem }>
              <span className="glyphicon glyphicon-plus"/>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  titleHeader: {
    color: "rgb(203,203,203)",
    fontSize: '50px',
    paddingBottom: '30px'
  },
  iconColor: {
    ok: '#12bb2e',
  },
};
export default TodoHeader;
